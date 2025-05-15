from flask import Flask, jsonify, request, send_from_directory, send_file, make_response
from flask_mysqldb import MySQL
from flask_cors import CORS
from captcha.image import ImageCaptcha
from captcha.audio import AudioCaptcha
import noisereduce as nr
from scipy.io import wavfile

from sklearn.metrics import classification_report
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import ast
from MySQLdb import OperationalError
from flask_limiter import Limiter
import os
import traceback
import re
import base64
import random
import string
import jwt
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from io import BytesIO
from datetime import timedelta
import re
import time
from flask_bcrypt import Bcrypt
import json
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from gtts import gTTS


os.environ["PATH"] += os.pathsep + r"C:\ffmpeg\bin"

import logging
from pydub import AudioSegment
# Set FFmpeg paths explicitly (optional but recommended)
AudioSegment.ffmpeg = r"C:\ffmpeg\bin\ffmpeg.exe"
AudioSegment.ffprobe = r"C:\ffmpeg\bin\ffprobe.exe"

# Move these to top after imports
train_accuracies = []
val_accuracies = []



app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)
app.secret_key = os.urandom(24)

app.config['JWT_SECRET_KEY'] = os.urandom(24)
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=15)


# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'udai'
mysql = MySQL(app)

def check_db_connection():
    """Check MySQL database connection availability"""
    try:
        with mysql.connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchone()
            if result and result[0] == 1:
                print("✅ Database connection successful")
            else:
                print("❌ Unexpected database response")
    except OperationalError as e:
        print(f"❌ Database connection failed: {str(e)}")
    except Exception as e:
        print(f"❌ Unexpected error: {str(e)}")

# Rate Limiting

limiter = Limiter(
    app=app,
    key_func=lambda: request.remote_addr,
    default_limits=["100 per minute"]  # Adjusted rate limit
)

# File Storage
UPLOAD_FOLDER = 'aadhaar_docs'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.errorhandler(429)
def too_many_requests(e):
    return jsonify({'error': 'Too many requests'}), 429

# --- Helper Functions ---
def generate_captcha():
    token = ''.join(random.choices(string.ascii_letters + string.digits, k=40))
    code = ''.join(random.choices(string.digits, k=6))

    # Generate image CAPTCHA (unchanged)
    image = ImageCaptcha().generate(code)
    image_bytes = image.getvalue()

    # --- NEW: Generate audio CAPTCHA using gTTS ---
    tts = gTTS(text=' '.join(code), lang='en')
    audio_buf = BytesIO()
    tts.write_to_fp(audio_buf)
    audio_buf.seek(0)
    # Convert MP3 to WAV for compatibility
    audio = AudioSegment.from_file(audio_buf, format="mp3")
    wav_buf = BytesIO()
    audio.export(wav_buf, format="wav")
    wav_buf.seek(0)
    audio_bytes = wav_buf.getvalue()

    # --- Optional: Noise reduction as before ---
    # (You can keep your existing noise reduction code here if desired)

    # Database operations (unchanged)
    cursor = mysql.connection.cursor()
    cursor.execute('''
        INSERT INTO captcha (token, code, image, audio)
        VALUES (%s, %s, %s, %s)
    ''', (token, code, image_bytes, audio_bytes))
    mysql.connection.commit()

    return {
        'token': token,
        'image': base64.b64encode(image_bytes).decode('utf-8'),
        'audio': base64.b64encode(audio_bytes).decode('utf-8')
    }

def generate_accuracy_plot():
    plt.figure(figsize=(10, 6))
    plt.plot(train_accuracies, label='Training Accuracy')
    plt.plot(val_accuracies, label='Validation Accuracy')
    plt.xlabel('Iteration')
    plt.ylabel('Accuracy')
    plt.legend()
    
    buf = BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    return buf




# --- API Endpoints ---

# Add these routes
@app.route('/api/upload', methods=['POST'])
@limiter.limit("5 per minute")
def upload_document():
    try:
        # CAPTCHA validation
        captcha_token = request.form.get('captchaToken')
        captcha_code = request.form.get('captchaCode')
        
        cursor = mysql.connection.cursor()
        cursor.execute('DELETE FROM captcha WHERE token = %s AND code = %s', 
                      (captcha_token, captcha_code))
        if cursor.rowcount == 0:
            return jsonify({'error': 'Invalid CAPTCHA'}), 400

        # Validate Aadhaar
        aadhaar = request.form.get('aadhaar')
        if not re.match(r'^\d{12}$', aadhaar):
            return jsonify({'error': 'Invalid Aadhaar number'}), 400

        # File validation
        if 'document' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400
            
        file = request.files['document']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
            
        if not file.filename.lower().endswith('.pdf'):
            return jsonify({'error': 'Only PDF files allowed'}), 400

        # Save file
        filename = f"{aadhaar}_{int(time.time())}.pdf"
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        # Store in database
        cursor.execute('''
            INSERT INTO aadhaar_documents (aadhaar, file_path)
            VALUES (%s, %s)
        ''', (aadhaar, file_path))
        mysql.connection.commit()

        return jsonify({'message': 'File uploaded successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/captcha', methods=['GET'])
@limiter.limit("100 per minute")  # Explicit rate limit for CAPTCHA API
def get_captcha():
    try:
        return jsonify(generate_captcha()), 200
    except Exception as e:
        error_trace = traceback.format_exc()
        print(f"Error in /api/captcha: {error_trace}")
        return jsonify({'error': 'Internal Server Error'}), 500


@app.route('/api/captcha/audio/<token>', methods=['GET'])
def get_audio_captcha(token):
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT audio FROM captcha WHERE token = %s', (token,))
    audio_data = cursor.fetchone()
    
    if not audio_data:
        return jsonify({'error': 'Audio not found'}), 404
        
    # Convert to bytes if needed and create file-like object
    audio_bytes = bytes(audio_data[0])  # Explicit conversion
    return send_file(BytesIO(audio_bytes), mimetype='audio/wav')

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        aadhaar = data.get('aadhaar')
        password = data.get('password')

        # Validate Aadhaar number
        if not re.match(r'^\d{12}$', aadhaar):
            return jsonify({'error': 'Invalid Aadhaar number'}), 400

        # Check if Aadhaar is already registered
        cursor = mysql.connection.cursor()
        cursor.execute('SELECT * FROM accounts WHERE aadhaar = %s', (aadhaar,))
        existing_account = cursor.fetchone()
        
        if existing_account:
            return jsonify({'error': 'Aadhaar already registered'}), 400

        # Hash password using bcrypt
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Store Aadhaar and hashed password in database
        cursor.execute('''
            INSERT INTO accounts (aadhaar, password)
            VALUES (%s, %s)
        ''', (aadhaar, hashed_password))
        mysql.connection.commit()

        return jsonify({'message': 'Account created successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/login', methods=['POST'])
@limiter.limit("5 per minute")
def login():
    try:
        data = request.get_json()
        
        # CAPTCHA validation
        captcha_token = data.get('captcha_token')
        captcha_code = data.get('captcha_code')
        
        cursor = mysql.connection.cursor()
        cursor.execute('DELETE FROM captcha WHERE token = %s AND code = %s', (captcha_token, captcha_code))
        
        if cursor.rowcount == 0:
            return jsonify({'error': 'Invalid CAPTCHA'}), 401
        
        # Store interaction data
        mouse_movements = data.get('mouseMovements', [])
        keyboard_interactions = data.get('keyboardInteractions', [])
        scrolling_patterns = data.get('scrollingPatterns', [])
        
        # Get Aadhaar and password from frontend
        aadhaar = data.get('aadhaar')
        password = data.get('password')
        
        # Check if Aadhaar is registered
        cursor.execute('SELECT password FROM accounts WHERE aadhaar = %s', (aadhaar,))
        stored_data = cursor.fetchone()
        
        if not stored_data:
            return jsonify({'error': 'Aadhaar not found'}), 404
        
        stored_hashed_password = stored_data[0]
        
        # Verify password
        if bcrypt.check_password_hash(stored_hashed_password, password):
            # Password is correct, proceed with login logic
            cursor.execute('''
                INSERT INTO interaction_data (aadhaar, mouse_movements, keyboard_interactions, scrolling_patterns, interaction_type)
                VALUES (%s, %s, %s, %s, 'login')
            ''', (aadhaar, str(mouse_movements), str(keyboard_interactions), str(scrolling_patterns)))
            mysql.connection.commit()
            
            # Generate JWT token
            token = jwt.encode(
                {'aadhaar': aadhaar},
                app.config['JWT_SECRET_KEY'],
                algorithm='HS256'
            )
            return jsonify({'token': token}), 200
        else:
            return jsonify({'error': 'Incorrect password'}), 401

    except Exception as e:
        return jsonify({'error': str(e)}), 500

   
# File Download Logic
@app.route('/api/download', methods=['POST'])
@limiter.limit("5 per minute")
def download():
    try:
        data = request.get_json()
        # CAPTCHA validation
        cursor = mysql.connection.cursor()
        cursor.execute('DELETE FROM captcha WHERE token = %s AND code = %s', (data['captchaToken'], data['captchaCode']))
        if cursor.rowcount == 0:
            return jsonify({'error': 'Invalid CAPTCHA'}), 401
        
        # Store interaction data
        mouse_movements = data.get('mouseMovements', [])
        keyboard_interactions = data.get('keyboardInteractions', [])
        scrolling_patterns = data.get('scrollingPatterns', [])
        
        cursor.execute('INSERT INTO interaction_data (aadhaar, mouse_movements, keyboard_interactions, scrolling_patterns, interaction_type) VALUES (%s, %s, %s, %s, %s)', (data['idValue'], str(mouse_movements), str(keyboard_interactions), str(scrolling_patterns), 'download'))
        mysql.connection.commit()
        
        # ID validation and document download logic
        patterns = {
            'uid': r'^\d{12}$',
            'vid': r'^\d{16}$',
            'eid': r'^\d{28}$'
        }
        
        if not re.match(patterns[data['idType']], data['idValue']):
            return jsonify({'error': 'Invalid ID format'}), 400
        
        # Resolve to Aadhaar number
        field_map = {
            'uid': 'aadhaar',
            'vid': 'vid',
            'eid': 'eid'
        }
        
        cursor.execute(f'SELECT aadhaar FROM accounts WHERE {field_map[data["idType"]]} = %s', (data['idValue'],))
        result = cursor.fetchone()
        if not result:
            return jsonify({'error': 'ID not found'}), 404
        aadhaar = result[0]
        
        directory = 'aadhaar_docs'
        matching_files = []
        for filename in os.listdir(directory):
            filename_aadhaar = filename.split('_')[0]
            if re.match(r'^\d{12}$', filename_aadhaar) and filename_aadhaar == aadhaar:
                matching_files.append(filename)
        
        if not matching_files:
            return jsonify({'error': 'No matching file found for this Aadhaar'}), 404
        
        # Download file
        cursor.execute('SELECT file_path FROM aadhaar_documents WHERE aadhaar = %s ORDER BY uploaded_at DESC LIMIT 1', (aadhaar,))
        doc_result = cursor.fetchone()
        if not doc_result:
            return jsonify({'error': 'No document found for this Aadhaar'}), 404
        
        return send_file(doc_result[0], as_attachment=True, download_name=matching_files[0])
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500



# 1. Get all unique Aadhaar numbers
@app.route('/api/aadhaars', methods=['GET'])
def get_aadhaars():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT DISTINCT aadhaar FROM interaction_data")
    aadhaars = [row[0] for row in cursor.fetchall()]
    return jsonify(aadhaars)

# 2. Get all interaction data for a given Aadhaar
@app.route('/api/interaction_data', methods=['GET'])
def get_interaction_data():
    aadhaar = request.args.get('aadhaar')
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM interaction_data WHERE aadhaar = %s", (aadhaar,))
    rows = cursor.fetchall()
    columns = [desc[0] for desc in cursor.description]
    data = [dict(zip(columns, row)) for row in rows]
    return jsonify(data)

# Added endpoint for combined analysis

@app.route('/api/accuracy_graph', methods=['GET'])
def get_accuracy_graph():
    aadhaar = request.args.get('aadhaar')
    
    # Database query
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT interaction_type FROM interaction_data WHERE aadhaar = %s", (aadhaar,))
    db_rows = cursor.fetchall()

    if not db_rows:
        return "No user interaction data", 404

    # CSV data processing
    csv_path = 'Behavioral-Analysis-Device-Sessions-Incidents-and-User-Demographics.csv'
    df = pd.read_csv(csv_path, low_memory=False)
    
    # Use all CSV data without user filtering
    features = df[['Typing Speed (chars/sec)', 'Mouse Movements']].values.tolist()
    labels = [1 if row[0] == 'login' else 0 for row in db_rows]

    # Handle data size mismatch
    min_samples = min(len(features), len(labels))
    features = features[:min_samples]
    labels = labels[:min_samples]

    if len(set(labels)) < 2:
        return generate_error_plot("Need both login and download interactions for training")

    # Data splitting and model training
    X_train, X_val, y_train, y_val = train_test_split(features, labels, test_size=0.2, random_state=42)
    
    model = RandomForestClassifier(class_weight='balanced')
    train_accuracies = []
    val_accuracies = []

    for i in range(1, 11):
        model.n_estimators = i
        model.fit(X_train, y_train)
        train_accuracies.append(model.score(X_train, y_train))
        val_accuracies.append(model.score(X_val, y_val))

    # Generate plot
    plt.figure(figsize=(10, 6))
    plt.plot(train_accuracies, label='Training Accuracy', color='cyan')
    plt.plot(val_accuracies, label='Validation Accuracy', color='orange')
    plt.xlabel('Iteration')
    plt.ylabel('Accuracy')
    plt.legend()

    buf = BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    
    # Generate report
    y_pred = model.predict(X_val)
    report = classification_report(y_val, y_pred, output_dict=True)

    return jsonify({
        'graph': base64.b64encode(buf.getvalue()).decode('utf-8'),
        'report': report
    }), 200

def generate_error_plot(message):
    plt.figure(figsize=(10, 6))
    plt.text(0.5, 0.5, message, ha='center', va='center', fontsize=14)
    buf = BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    return send_file(buf, mimetype='image/png')

# --- Initialization ---
if __name__ == '__main__':
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    
    # Check database connection before starting the app
    with app.app_context():
        check_db_connection()
    
    app.run(debug=True)
