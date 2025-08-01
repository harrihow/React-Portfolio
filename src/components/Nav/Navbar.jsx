import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>HF</div>
        <div className={styles.navLinks}>
          <a href="#home"     className={styles.navLink}>Home</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#about"    className={styles.navLink}>About</a>
          <a href="#contact"  className={styles.navLink}>Contact</a>
          <a href="#contact"  className={styles.navButton}>Hire Me</a>
        </div>
      </div>
    </nav>
  )
}
