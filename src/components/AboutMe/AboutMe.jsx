import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>About Me</h2>

            <div className={styles.aboutText}>
              <p>
                I'm an aspiring full-stack developer passionate about building web apps
                that solve real-world problems. I enjoy working with modern tech—especially React on the frontend.
              </p>
              <p>
                I’m continuously sharpening my skills and love turning ideas into
                simple, functional solutions.
              </p>
              <p>
                When I’m not coding, I’m exploring tech trends, tinkering with side projects,
                or learning from the community.
              </p>
            </div>

            <div className={styles.resumeDownload}>
              <a href={`${import.meta.env.BASE_URL}Harri%20Resume%202025.pdf`} download="Harri Resume 2025.pdf"  className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}>
                Download Resume
              </a>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Skills & Technologies</h3>
            <div className={styles.skillsCategories}>
              <div className={styles.skillCategory}>
                <h4 className={styles.categoryTitle}>Frontend</h4>
                <div className={styles.techBadges}>
                  <span className={styles.techBadge}>HTML</span>
                  <span className={styles.techBadge}>CSS</span>
                  <span className={styles.techBadge}>JavaScript</span>
                  <span className={styles.techBadge}>React JS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
