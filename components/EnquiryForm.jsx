'use client';
import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from '../src/app/styles/EnquiryModal.module.css';

export default function EnquiryModal() {
  const [showModal, setShowModal] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log('Captcha value:', value);
  };

  if (!showModal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
        <h2>Enquire <span>Now</span></h2>
        <form className={styles.form}>
          <div className={styles.row}>
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
          </div>
          <div className={styles.row}>
            <input type="tel" placeholder="Phone Number*" required />
            <input type="email" placeholder="Email ID*" required />
          </div>
          <textarea rows="3" placeholder="Message*" required />

          <div className={styles.captchaBox}>
            <ReCAPTCHA
              sitekey="YOUR_SITE_KEY"
              onChange={handleCaptchaChange}
            />
          </div>

          <div className={styles.checkboxRow}>
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">
              I accept the privacy policy and terms of use
            </label>
          </div>

          

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
