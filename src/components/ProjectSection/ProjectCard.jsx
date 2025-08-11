
import React from 'react'
import styles    from './ProjectsGrid.module.css'
import btnStyles from '../Button/Button.module.css'
import cn        from 'classnames'
/*update*/
export default function ProjectCard({
  title,
  description,
  features = [],
  techStack = []
}) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.features}>
          {features.map(function(feature, i) {
            return (
              <div key={i} className={styles.feature}>
                <span className={styles.featureDot} />  
                {feature}
              </div>
            )
          })}
        </div>

        <div className={styles.techStack}>
          {techStack.map(function(tech, i) {
            return (
              <span key={i} className={styles.techBadge}>
                {tech}
              </span>
            )
          })}
        </div>

        <div className={styles.projectLinks}>
          <a
            href="https://harrihow.github.io/react-ticket-helper-generator/"
            className={cn(btnStyles.btn, btnStyles.btnSm, btnStyles.btnOutline)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15,3 21,3 21,9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Demo
          </a>
          <a
            href="https://github.com/harrihow/react-ticket-helper-generator/"
            className={cn(btnStyles.btn, btnStyles.btnSm, btnStyles.btnOutline)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
            Code
          </a>
          <a
            href="https://github.com/harrihow/react-ticket-helper-generator/"
            className={cn(btnStyles.btn, btnStyles.btnSm, btnStyles.btnOutline)}
          >
            Case Study
          </a>
        </div>
      </div>
    </div>
  )
}
