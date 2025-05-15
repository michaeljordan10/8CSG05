import React, { useState, useEffect } from "react";
import { FaVolumeUp } from 'react-icons/fa';
import '../css/login.css';
import adhaarengishlogo from '../img/aadhaar_english_logo.9a2d63795a7f7bdd7acb2148585336be.svg';
import englishlogo from '../img/uidai_english_logo.dd2d2a1cdbf8dcd226664631cb383029.svg';
import axios from 'axios';

const Login = () => {
    const [aadhaar, setAadhaar] = useState('');
    const [password, setPassword] = useState('');
    const [captchaCode, setCaptchaCode] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const [captchaImage, setCaptchaImage] = useState('');
    const [captchaAudio, setCaptchaAudio] = useState('');
    const [error, setError] = useState('');
    const [mouseMovements, setMouseMovements] = useState([]);
    const [keyboardInteractions, setKeyboardInteractions] = useState([]);
    const [scrollingPatterns, setScrollingPatterns] = useState([]);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('scroll', handleScroll);
        fetchNewCaptcha();
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseMove = (e) => {
        setMouseMovements(prev => [...prev, { x: e.clientX, y: e.clientY }]);
    };

    const handleKeyDown = (e) => {
        setKeyboardInteractions(prev => [...prev, { key: e.key, timestamp: new Date().getTime() }]);
    };

    const handleScroll = () => {
        setScrollingPatterns(prev => [...prev, { scrollY: window.scrollY, timestamp: new Date().getTime() }]);
    };

    const playAudio = () => {
        try {
            if (captchaAudio) {
                const audio = new Audio(`data:audio/wav;base64,${captchaAudio}`);
                audio.play().catch(error => {
                    setError('Failed to play audio CAPTCHA');
                });
            }
        } catch (err) {
            setError('Audio playback not supported');
        }
    };

    const fetchNewCaptcha = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/captcha');
            setCaptchaToken(response.data.token);
            setCaptchaImage(response.data.image);
            setCaptchaAudio(response.data.audio);
        } catch (err) {
            setError('Failed to load CAPTCHA');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                aadhaar,
                password,
                captcha_code: captchaCode,
                captcha_token: captchaToken,
                mouseMovements,
                keyboardInteractions,
                scrollingPatterns
            });
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                window.location.href = `/downloadadhaarcard`;
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
            fetchNewCaptcha();
        }
    };

    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo-left">
                        <img src={englishlogo} className="uidaiLogo" alt="uidai-logo" />
                    </div>
                    <div className="header__logo-right">
                        <img src={adhaarengishlogo} className="aadhaarLogo" alt="aadhaar-logo" />
                    </div>
                </div>
            </header>

            <div className="login-section">
                <div className="login-section__description">Login to Aadhaar via Password</div>
                <center>
                    <div className="login-section__card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-section">
                            <div className="form-section__text-field">
                                <input
                                    type="text"
                                    placeholder="Enter Aadhaar Number"
                                    value={aadhaar}
                                    onChange={(e) => setAadhaar(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-section__text-field">
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-section__captcha-field-container">
                            <div className="form-section__captcha-field">
                                        {captchaImage && (
                                            <div className="captcha-container">
                                            <img 
                                                src={`data:image/png;base64,${captchaImage}`}
                                                alt="CAPTCHA" 
                                                onClick={fetchNewCaptcha}
                                                style={{ cursor: 'pointer' }}
                                            />
                                            <button 
                                                type="button" 
                                                onClick={playAudio}
                                                className="audio-button"
                                                aria-label="Play CAPTCHA audio"
                                            >
                                                <FaVolumeUp size={24} />
                                            </button>
                                            </div>
                                        )}
                                    <input
                                        type="text"
                                        placeholder="Enter CAPTCHA"
                                        value={captchaCode}
                                        onChange={(e) => setCaptchaCode(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <div className="form-section__button-container">
                                <button type="submit" className="button_btn__A84dV">
                                    Login Account
                                </button>
                            <p><a href="/">Back to Home</a></p>
                            </div>
                        </div>
                    </form>
                    <p>Not Registered With Us ? Do <a href="/register"> Register</a></p>
                </div></center>
            </div>

            <footer className="footer">
                <p className="copyright-text">
                    Copyright © 2025 Unique Identification Authority of India All Rights Reserved
                </p>
            </footer>
        </div>
    );
};

export default Login;
