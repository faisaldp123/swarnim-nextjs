'use client';
import { useRef } from 'react';
import styles from '../src/app/styles/Amenities.module.css';

const amenities = [
  {
    title: 'The Golden ',
    span: 'Ecosystem',
    text: 'Hospitals: Jain Hospital | Vardaan Hospital And Trauma Centre | Bharat Hospital And Trauma Centre',
    image: '/media/image-1.webp',
  },
  {
    title: 'The Golden ',
    span: 'Landmark',
    text: 'Spanning 2,50,000 sq. ft of well-planned retail spaces...',
    image: '/media/image-2.webp',
  },
  {
    title: 'The Golden ',
    span: 'Drive',
    text: 'The innovative drive-through development gives every shop easy access via vehicle...',
    image: '/media/image-3.webp',
  },
  {
    title: 'The Golden ',
    span: 'Address',
    text: 'Pubs & Breweries, Supermarket, Wellness Centre, Bakery...',
    image: '/media/image-4.webp',
  },
  {
    title: 'The Golden ',
    span: 'Choice',
    text: 'Invest at Swarnim on your terms. With both leasing and buying models available...',
    image: '/media/image-5.webp',
  },
  {
    title: 'The Golden ',
    span: 'Destination',
    text: 'Besides an elevated shopping experience, Swarnim also has provisions for a multiplex...',
    image: '/media/image-6.webp',
  },
];

export default function Amenities() {
  return (
    <section className={styles.amenities_container} id="amenities">
      {amenities.map((item, idx) => (
        <div
          key={idx}
          className={styles.panel}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className={styles.overlay}>
            <h2>{item.title}</h2>
            <h1>{item.span}</h1>
            <p>{item.text}</p>
            <button>DISCOVER MORE</button>
          </div>
        </div>
      ))}
    </section>
  );
}