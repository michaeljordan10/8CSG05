import React, { useState, useEffect } from "react";
import '../css/downloadcard.css';
import adhaarenglishlogo from '../img/aadhaar_english_logo.9a2d63795a7f7bdd7acb2148585336be.svg';
import englishlogo from '../img/uidai_english_logo.dd2d2a1cdbf8dcd226664631cb383029.svg';
import axios from 'axios';
import { FaVolumeUp } from 'react-icons/fa';

const DownloadCard = () => {
  const [idValue, setIdValue] = useState('');
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

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/download', {
        "idType":"uid",
        idValue,
        captchaCode,
        captchaToken,
        mouseMovements,
        keyboardInteractions,
        scrollingPatterns
      }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${idValue}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      fetchNewCaptcha();
    } catch (err) {
      setError(err.response?.data?.error || 'Download failed');
      fetchNewCaptcha();
    }
  };

  const isFormValid = idValue && captchaCode;

   return (
     <div>
       <div dir="ltr">
         <div className="Toastify" />
         <div className="ltr">
           <header className="header">
             <div className="header__logos">
               <div className="header__logo-container--left">
                 <img
                   src={adhaarenglishlogo}
                   alt="UIDAI Logo"
                 />
               </div>
               <div className="header__logo-container--center">
                 Unique Identification Authority of India
               </div>
               <div className="header__logo-container--right">
                 <img
                   src={englishlogo}
                   alt="Aadhaar Logo"
                 />
               </div>
             </div>
             <div className="header__bar">
               <div className="header__bar-content-wrapper">
                 <img
                   src="/static/media/dashboard.21335c2c89af71912adf700d228cbecd.svg"
                   alt="Dashboard Icon"
                   className="header__dashboard-logo"
                 />
                 <div className="header__dashboard-label">
                   <span>myAadhaar</span>
                 </div>
                 <p style={{'color':'#fff'}}><a href="/">Back to Home</a></p>
               </div>
             </div>

           </header>
         </div>
         <div className="unauth-eaadhaar-download">
           <div>
             <div className="unauth-eaadhaar-download__auth-screen">
               <div>
                 <div className="unauth-eaadhaar-download__card-container">
                   <form onSubmit={handleDownload}>
                     
                     
                     <div className="auth-form__form-container">
                       <div className="auth-form__text-field">
                         <div className="sc-fXSgeo gOcOUk" direction="ltr">
                           <div
                             className="sc-JrDLc jWPGsS auth-form__text-field-inner-div auth-form__text-field-inner-div"
                             direction="ltr"
                           >
                             <div className="sc-fjvvzt hrmueY">
                              
                               <input
                                 
                                 
                                 name="uid"
                                 autoComplete="off"
                                 
                                 value={idValue}
                                onChange={(e) => setIdValue(e.target.value)}
                                placeholder='Enter 12-digit Aadhaar Number' 
                                    
              
                                
                                 className="sc-fBWQRz bjSLyk"
                                 
                               />
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="pvc-form__captcha-field-container">
                         <div className="pvc-form__captcha-field">


                           <div className="sc-fXSgeo gOcOUk" direction="ltr">
                             <div
                               className="sc-JrDLc jWPGsS auth-form__captcha-field-inner-div withAudio auth-form__captcha-field-inner-div withAudio"
                               direction="ltr"
                             >
                               <div className="sc-fjvvzt hrmueY">
                                 
                                 <input
                                   
                                   name="captcha"
                                   placeholder="Enter CAPTCHA"
                                   autoComplete="off"
                                   
                                   value={captchaCode}
                                onChange={(e) => setCaptchaCode(e.target.value)}
                                   className="sc-fBWQRz bjSLyk"
                                  
                                 />
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className="pvc-form__captcha-box">
                         <div className="captcha-container">
                                {captchaImage && (
                                    <img 
                                        src={`data:image/png;base64,${captchaImage}`}
                                        alt="CAPTCHA"
                                        onClick={fetchNewCaptcha}
                                        style={{ cursor: 'pointer' }}
                                    />
                                )}
                                <button 
                                    type="button" 
                                    onClick={playAudio}
                                    className="audio-button"
                                >
                                    <FaVolumeUp size={24} />
                                </button>
                            </div>
                           <div className="vsc-controller" />
                           
                           <div className="aadhaar-form__captcha-box__audioIco">
                             <svg
                               className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                               focusable="false"
                               aria-hidden="true"
                               viewBox="0 0 24 24"
                               data-testid="VolumeUpIcon"
                             >
                               <path d="M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77" />
                             </svg>
                           </div>
                           
                           <div className="pvc-form__refresh-icon">
                             <svg
                               className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                               focusable="false"
                               aria-hidden="true"
                               viewBox="0 0 24 24"
                               data-testid="AutorenewIcon"
                             >
                               <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26" />
                             </svg>
                           </div>
                         </div>
                       </div>

                       <div className="auth-form__button-container">
                         <div className="auth-form__button">
                           <button
                             
                             className="button_btn__HeAxz"
                             
                             type="submit"
                           
                            disabled={!isFormValid}
                            style={{
                              backgroundImage: "none",
                              color: "white",
                                backgroundColor: isFormValid ? "#007bff" : "rgb(181, 177, 177)",
                                cursor: isFormValid ? "pointer" : "default",
                                border: "none",
                            }}
                           >
                             Download Aadhaar
                           </button>
                         </div>
                       </div>
                       {error && <div className="error-message">{error}</div>}
                     </div>
                   </form>
                 </div>
               </div>
               <div className="unauth-eaadhaar-download__faq">
                 <div className="unauth-eaadhaar-download__faq-title-container">
                   <img
                     src="/static/media/faq-icon.2ec92ba82e3c3510425ffec418c95fb4.svg"
                     alt="Frequently Asked Questions"
                   />
                   <div className="unauth-eaadhaar-download__Faq-title">
                     <span>Frequently Asked Questions</span>
                   </div>
                 </div>
                 <div className="ltr">
                   <div className="accordion-container-shadow">
                     <div className="wrapper">
                       <div className="accordion-shadow">
                         <div className="accordion-shadow__title" id={0}>
                           <div className="title">
                             <div className="ltr">
                               <div className="faq-title">
                                 What is e-Aadhaar?
                               </div>
                             </div>
                           </div>
                           <img
                             className="toggle-image"
                             src="/static/media/ArrowDown.a5229ab197c918ede75c7ae811502301.svg"
                             alt="Arrow Down"
                             style={{ transform: "rotate(0deg)" }}
                           />
                         </div>
                         <div
                           className="accordion-shadow__panel"
                           style={{
                             maxHeight: 0,
                             transition: "max-height 0.2s ease-out",
                           }}
                         >
                           <div className="ltr">
                             <div className="faq-content">
                               <div>
                                 <div>
                                   e-Aadhaar is a password protected electronic
                                   copy of Aadhaar, digitally signed by UIDAI.
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="wrapper">
                       <div className="accordion-shadow">
                         <div className="accordion-shadow__title" id={1}>
                           <div className="title">
                             <div className="ltr">
                               <div className="faq-title">
                                 Is e-Aadhaar equally valid like physical copy
                                 of Aadhaar?
                               </div>
                             </div>
                           </div>
                           <img
                             className="toggle-image"
                             src="/static/media/ArrowDown.a5229ab197c918ede75c7ae811502301.svg"
                             alt="Arrow Down"
                             style={{ transform: "rotate(0deg)" }}
                           />
                         </div>
                         <div
                           className="accordion-shadow__panel"
                           style={{
                             maxHeight: 0,
                             transition: "max-height 0.2s ease-out",
                           }}
                         >
                           <div className="ltr">
                             <div className="faq-content">
                               <div>
                                 <div>
                                   As per Aadhaar Act, e-Aadhaar is equally
                                   valid like Physical Copy of Aadhaar for all
                                   purposes. For validity of eAadhaar, please
                                   visit UIDAI circular-{" "}
                                   <a
                                     href="https://uidai.gov.in/images/ uidai_om_on_e_aadhaar_validity.pdf"
                                     target="_blank"
                                   >
                                     https://uidai.gov.in/images/
                                     uidai_om_on_e_aadhaar_validity.pdf
                                   </a>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="wrapper">
                       <div className="accordion-shadow">
                         <div className="accordion-shadow__title" id={2}>
                           <div className="title">
                             <div className="ltr">
                               <div className="faq-title">
                                 What is Masked Aadhaar?
                               </div>
                             </div>
                           </div>
                           <img
                             className="toggle-image"
                             src="/static/media/ArrowDown.a5229ab197c918ede75c7ae811502301.svg"
                             alt="Arrow Down"
                             style={{ transform: "rotate(0deg)" }}
                           />
                         </div>
                         <div
                           className="accordion-shadow__panel"
                           style={{
                             maxHeight: 0,
                             transition: "max-height 0.2s ease-out",
                           }}
                         >
                           <div className="ltr">
                             <div className="faq-content">
                               <div>
                                 <div>
                                   Masked Aadhaar implies replacing of first 8
                                   digits of Aadhaar number with “xxxx-xxxx”
                                   while only last 4 digits of the Aadhaar
                                   Number are visible.
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="wrapper">
                       <div className="accordion-shadow">
                         <div className="accordion-shadow__title" id={3}>
                           <div className="title">
                             <div className="ltr">
                               <div className="faq-title">
                                 How to validate digital signatures in
                                 e-Aadhaar?
                               </div>
                             </div>
                           </div>
                           <img
                             className="toggle-image"
                             src="/static/media/ArrowDown.a5229ab197c918ede75c7ae811502301.svg"
                             alt="Arrow Down"
                             style={{ transform: "rotate(0deg)" }}
                           />
                         </div>
                         <div
                           className="accordion-shadow__panel"
                           style={{
                             maxHeight: 0,
                             transition: "max-height 0.2s ease-out",
                           }}
                         >
                           <div className="ltr">
                             <div className="faq-content">
                               <div>
                                 <div>
                                   Please visit Aadhaar YouTube Channel and
                                   watch tutorial link on{" "}
                                   <a
                                     href="https://youtu.be/aVNfUNIccZs?si=ByW1O6BIPMwc0seL"
                                     target="_blank"
                                   >
                                     https://youtu.be/aVNfUNIccZs?si=ByW1O6BIPMwc0seL
                                   </a>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="wrapper">
                       <div className="accordion-shadow">
                         <div className="accordion-shadow__title" id={4}>
                           <div className="title">
                             <div className="ltr">
                               <div className="faq-title">
                                 What Is the Password of e-Aadhaar?
                               </div>
                             </div>
                           </div>
                           <img
                             className="toggle-image"
                             src="/static/media/ArrowDown.a5229ab197c918ede75c7ae811502301.svg"
                             alt="Arrow Down"
                             style={{ transform: "rotate(0deg)" }}
                           />
                         </div>
                         <div
                           className="accordion-shadow__panel"
                           style={{
                             maxHeight: 0,
                             transition: "max-height 0.2s ease-out",
                           }}
                         >
                           <div className="ltr">
                             <div className="faq-content">
                               <div>
                                 <div>
                                   Password of eAadhaar is a combination of the
                                   first 4 letters of name in CAPITAL and the
                                   year of birth (YYYY).
                                   <br />
                                   <b>For Example:</b>
                                 </div>
                                 <ul className="faq__unordered-list">
                                   <li className="faq__list-items">
                                     Example 1
                                     <ol>
                                       <li>Name: SURESH KUMAR</li>
                                       <li>Year of Birth: 1990</li>
                                       <li>Password: SURE1990</li>
                                     </ol>
                                   </li>
                                   <li className="faq__list-items">
                                     Example 2
                                     <ol>
                                       <li>Name: SAI KUMAR</li>
                                       <li>Year of Birth: 1990</li>
                                       <li>Password: SAIK1990</li>
                                     </ol>
                                   </li>
                                   <li className="faq__list-items">
                                     Example 3
                                     <ol>
                                       <li>Name: P. KUMAR</li>
                                       <li>Year of Birth: 1990</li>
                                       <li>Password: P.KU1990</li>
                                     </ol>
                                   </li>
                                   <li className="faq__list-items">
                                     Example 4
                                     <ol>
                                       <li>Name: RIA</li>
                                       <li>Year of Birth: 1990</li>
                                       <li>Password: RIA1990</li>
                                     </ol>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="wrapper">
                       <div className="accordion-shadow">
                         <div className="accordion-shadow__title" id={5}>
                           <div className="title">
                             <div className="ltr">
                               <div className="faq-title">
                                 What supporting software needed to open
                                 e-Aadhaar?
                               </div>
                             </div>
                           </div>
                           <img
                             className="toggle-image"
                             src="/static/media/ArrowDown.a5229ab197c918ede75c7ae811502301.svg"
                             alt="Arrow Down"
                             style={{ transform: "rotate(0deg)" }}
                           />
                         </div>
                         <div
                           className="accordion-shadow__panel"
                           style={{
                             maxHeight: 0,
                             transition: "max-height 0.2s ease-out",
                           }}
                         >
                           <div className="ltr">
                             <div className="faq-content">
                               <div>
                                 <div>
                                   Resident needs 'Adobe Reader' to view
                                   e-Aadhaar. You have 'Adobe Reader' installed
                                   in your System. To install Adobe Reader in
                                   the System
                                 </div>
                                 <ul className="faq__unordered-list">
                                   <li className="faq__list-items">
                                     visit{" "}
                                     <a
                                       href="https://get.adobe.com/reader/"
                                       target="_blank"
                                     >
                                       https://get.adobe.com/reader/
                                     </a>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="wrapper">
                       <div className="accordion-shadow">
                         <div className="accordion-shadow__title" id={6}>
                           <div className="title">
                             <div className="ltr">
                               <div className="faq-title">
                                 How can an Aadhaar Number holder download
                                 e-Aadhaar?
                               </div>
                             </div>
                           </div>
                           <img
                             className="toggle-image"
                             src="/static/media/ArrowDown.a5229ab197c918ede75c7ae811502301.svg"
                             alt="Arrow Down"
                             style={{ transform: "rotate(0deg)" }}
                           />
                         </div>
                         <div
                           className="accordion-shadow__panel"
                           style={{
                             maxHeight: 0,
                             transition: "max-height 0.2s ease-out",
                           }}
                         >
                           <div className="ltr">
                             <div className="faq-content">
                               <div>
                                 <div>
                                   An Aadhaar Number holder can download
                                   e-Aadhaar by following three ways.
                                 </div>
                                 <ul className="faq__unordered-list">
                                   <li className="faq__list-items">
                                     By Using Enrollment Number:
                                   </li>
                                   <li className="faq__list-items">
                                     By Using Aadhaar No:
                                   </li>
                                   <li className="faq__list-items">
                                     By using VID:
                                   </li>
                                   <li className="faq__list-items">
                                     OTP for downloading eAadhaar will be
                                     received on registered mobile number.
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default DownloadCard;