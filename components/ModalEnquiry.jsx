'use client';
import styles from '../src/app/styles/ModalEnquiry.module.css';

export default function ModalEnquiry({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}