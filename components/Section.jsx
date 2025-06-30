'use client';

import Image from 'next/image';
import styles from '../src/app/styles/Overview.module.css';

export default function Overview() {
  return (
    <section className={styles.overview_section} id="overview">
      <div className={styles.overview_container}>
        <div className={styles.overview_text}>
          <h2>The Golden<br />Life</h2>
          <p>
            You promise yourself and your loved ones brighter opportunities, a prospering tomorrow, and a purer life. Our promise is delivering spaces that help you fulfill yours.
            A high-street retail project in the heart of an auspicious region, Swarnim is a landmark. And, a worthy investment for the far-sighted. When you own your part of Swarnim, 
            you own more than just <strong>affordable commercial shops in Gurgaon</strong>; you own a pure asset, a bright opportunity. It is your step toward the golden life.
          </p>
        </div>
        <div className={styles.overview_image}>
          <Image src="/media/overview.webp" width={400} height={100} alt="Swarnim Building" />
        </div>
      </div>
    </section>
  );
}
