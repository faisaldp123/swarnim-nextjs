'use client';
import React from 'react';
import styles from '../src/app/styles/Location.module.css';
import Image from 'next/image';

export default function Location() {
  return (
    <section className={styles.location_section}>
      <div className={styles.location_container}>
        {/* Left Content */}
        <div className={styles.location_content}>
          <h5 className={styles.section_subtitle}>LOCATION</h5>
          <h2 className={styles.section_title}>The Golden<br />Location</h2>
          <p className={styles.location_desc}>
            Swarnim’s position in <strong>Sector 5, Gurgaon</strong>, one of the city’s most promising sub-cities, makes it an irresistible choice for those looking to invest in <strong>commercial retail space in Gurgaon</strong>.
          </p>

          <div className={styles.location_highlights}>
            <div className={styles.highlight_box}>
              <div className={styles.icon_circle}>👨‍👩‍👧‍👦</div>
              <p>Located in a bustling community of 25,000 families</p>
            </div>
            <div className={styles.highlight_box}>
              <div className={styles.icon_circle}>🚉</div>
              <p>Proximity and easy access to Gurugram’s city center and Delhi</p>
            </div>
            <div className={styles.highlight_box}>
              <div className={styles.icon_circle}>🛣️</div>
              <p>Well-connected to all major roads</p>
            </div>
          </div>

          <p className={styles.location_desc}>
            Swarnim is a dream come true for investors looking for <strong>retail space in Gurgaon</strong> because here every opportunity is golden. Swarnim offers thoughtfully designed shops that promise high growth potential. <br />
            Welcome to a space where golden opportunities await.
          </p>
        </div>

        {/* Right Map */}
        <div className={styles.location_map}>
          <Image width={300} height={100} src="/media/map.webp" alt="Location Map" />
        </div>
      </div>

      {/* Bottom Timeline */}
      <div className={styles.timeline}>
        {[
          ['Delhi Mumbai Industrial Corridor', '5 minutes'],
          ['IGI Airport', '30 minutes'],
          ['G.D. Goenka School', '5 minutes'],
          ['K.R. Mangalam University', '5 minutes'],
          ['Medanta – The Medicity', '15 minutes'],
          ['Proposed Metro', '10 minutes'],
          ['Gurugram Railway Station', '20 minutes'],
        ].map(([label, time], index) => (
          <div key={index} className={styles.timeline_point}>
            <div className={styles.circle}></div>
            <p className={styles.timeline_label}>{label}</p>
            <p className={styles.timeline_time}>{time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
