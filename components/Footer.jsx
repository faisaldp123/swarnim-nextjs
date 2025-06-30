import styles from '../src/app/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6">
      <p className={styles.footer}>&copy; 2025 Ganga Realty. All rights reserved.</p>
    </footer>
  );
}