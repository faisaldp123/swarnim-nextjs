'use client';
import Image from 'next/image';
import styles from '../src/app/styles/FloorPlan.module.css';

const floorPlans = [
  {
    title: 'SAPPHIRE · I',
    address: 'Tathastu - I, Sector 05, Sohna',
    image: '/media/media-1.png',
  },
  {
    title: 'SAPPHIRE · II',
    address: 'Tathastu - I, Sector 05, Sohna',
    image: '/media/media-2.png',
  },
];

export default function FloorPlan() {
  return (
    <section className={styles.floor_section} id="floor-plan">

      <div className={styles.grid}>
        {floorPlans.map((plan, idx) => (
          <div key={idx} className={styles.card}>
            <Image
              src={plan.image}
              alt={plan.title}
              width={600}
              height={300}
              className={styles.plan_img}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
