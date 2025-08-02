import React from 'react';
import cn from 'classnames';
import btnStyles from '../Button/Button.module.css';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Let&apos;s Work Together</h2>
        <p className={styles.sectionSubtitle}>
          I&apos;m always open to discussing new opportunities, interesting projects, or just connecting with fellow developers.
        </p>

        <div className={styles.contactButtons}>
          <a
            href="mailto:harri.fano@example.com"
            className={cn(
              btnStyles.btn,
              btnStyles.btnPrimary,
              btnStyles.btnLg,
              btnStyles.btnGlow
            )}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/harrihow"
            className={cn(
              btnStyles.btn,
              btnStyles.btnOutline,
              btnStyles.btnLg
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        <div className={styles.socialLinks}>
          <a href="mailto:harri.fano@example.com" className={styles.socialLink}>Email</a>
          <a href="https://github.com/harrihow" className={styles.socialLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/harrihow" className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}