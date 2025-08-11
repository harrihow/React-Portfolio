import React from 'react'
import styles     from './ProjectSection.module.css'
import gridStyles from './ProjectsGrid.module.css'
import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    id: 1,
    title: 'Ticket Helper Generator',
    description:
      'Simple App that assist agents in creating tickets for customer support',
    features: [
      'Simple UI for ticket creation',
      'Easy copy to clipboard functionality',
    ],
    techStack: ['React JS']
  },
]

export default function ProjectSection() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Project</h2>
          <p className={styles.sectionSubtitle}>
            Here are some of my recent projects that showcase my skills.
          </p>
        </div>

        <div className={gridStyles.projectsGrid}>
          {projects.map(function(proj) {
            return (
              <ProjectCard
                key={proj.id}
                title={proj.title}
                description={proj.description}
                features={proj.features}
                techStack={proj.techStack}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
