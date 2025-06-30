'use client';

import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../src/app/styles/Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.main_header}>
      <div className={styles.header_wrapper}>
        {/* Logo: Left Side */}
        <div className={styles.logo_wrapper}>
          <div className={styles.logo_box}>
            <Image src="/media/logo.svg" alt="Swarnim Logo" width={40} height={40} />
            <p className={styles.logo_text}>swarnim</p>
            <p className={styles.logo_sub}>High Street</p>
          </div>
        </div>

        {/* Navigation + CTA in Center with Padding */}
        <div className={styles.center_nav}>
          <nav className={`${styles.nav_links} ${menuOpen ? styles.open : ''}`}>
            <a href="#overview">Overview</a>
            <div className={styles.dropdown}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                Our Projects <FaChevronDown size={10} />
              </button>
              {dropdownOpen && (
                <div className={styles.dropdown_menu}>
                  <a href="#highlight1">Retail Space</a>
                  <a href="#highlight2">Investment</a>
                </div>
              )}
            </div>
            <a href="#location">Location</a>
            <a href="#amenities">Amenities</a>
            <a href="#floorplans">Floor Plans</a>
            <a href="#brochure">Download Brochure</a>
          </nav>

          <a href="#enquire" className={styles.cta_button}>Enquire Now</a>
        </div>

        {/* Mobile Menu Icon */}
        <button className={styles.menu_toggle} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
    </header>
  );
}
