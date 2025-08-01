import React from 'react'
import styles     from './ProjectSection.module.css'
import gridStyles from './ProjectsGrid.module.css'
import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
    features: [
      'JWT authentication & user management',
      'Stripe payment integration & order tracking for Services'
    ],
    techStack: ['React', 'Spring Boot', 'MySQL', 'AWS']
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team workspaces.',
    features: [
      'WebSocket real-time updates',
      'Custom project workflows & filtering'
    ],
    techStack: ['React', 'Java', 'PostgreSQL', 'WebSocket']
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'An intelligent content generation tool leveraging machine learning for high-quality written content.',
    features: [
      'OpenAI GPT integration & prompt templates',
      'Tone adjustment & content export'
    ],
    techStack: ['React', 'Spring Boot', 'OpenAI API', 'PostgreSQL']
  }
]

export default function ProjectSection() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Here are some of my recent projects that showcase my skills in full-stack development
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
