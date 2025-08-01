import React from "react";
import cn from 'classnames'
import btnStyles from '../Button/Button.module.css'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>Harri Fano</h1>
        <p className={styles.heroSubtitle}>Aspiring Full-Stack Developer</p>

        <div className={styles.heroButtons}>
          <a href="#projects" className={cn(
              btnStyles.btn,
              btnStyles.btnPrimary,
              btnStyles.btnGlow
            )}> View My Work </a>
          <a href="#contact" className={cn(btnStyles.btn, btnStyles.btnOutline)}>Get In Touch</a>
        </div>

        <div className={styles.socialLinks}>
          <a href="mailto:harri.fano@example.com" className={styles.socialLink}>Email</a>
          <a href="https://github.com/harrihow" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://linkedin.com/in/harrihow" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
