import React from 'react';
import styles from '../src/app/styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <h1 className={styles.title}>
        <span>Enquire</span> Now
      </h1>

      <form className={styles.contact_form}>
        <div className={styles.form_row}>
          <div className={styles.form_group}>
            <label>First Name<span>*</span></label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className={styles.form_group}>
            <label>Last Name<span>*</span></label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className={styles.form_row}>
          <div className={styles.form_group}>
            <label>Phone Number<span>*</span></label>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className={styles.form_group}>
            <label>Email Id<span>*</span></label>
            <input type="email" placeholder="Email Id" />
          </div>
        </div>

        <div className={`${styles.form_group}  full-width`}>
          <label>Message<span>*</span></label>
          <textarea rows="3" placeholder="Your message..."></textarea>
        </div>

        <div className={styles.captcha_box}>
          <div className={styles.recaptcha_placeholder}>
            <span>🔲 I'm not a robot</span>
          </div>
        </div>

        <div className={styles.privacy_policy}>
          <input type={styles.checkbox} />
          <label>I accept the privacy policy and terms of use</label>
        </div>

        <button type="submit" className={styles.submit_btn}>SUBMIT</button>
      </form>

      <div className={styles.footer}>
        <p><strong>Ganga Global Homes Private Limited</strong></p>
        <p>10th Floor, Tower B, <a href="#">Vatika Tower</a>,</p>
        <p>Golf Course Road, Sector 54, Gurugram, Haryana 122011</p>
        <p><a href="tel:+911244192301">+91-1244192301</a></p>
        <p className="disclaimer">Disclaimer: All designs, specifications are illustrative and subject to change. All images are graphic depiction and purely artistic in nature.</p>

        <div className={styles.footer_links}>
          <a href="#">Overview</a>
          <a href="#">Location</a>
          <a href="#">Amenities</a>
          <a href="#">Floor Plan</a>
          <a href="#">Construction Update</a>
          <a href="#">Download Brochure</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
