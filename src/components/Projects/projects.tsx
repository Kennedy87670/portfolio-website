import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import styles from './projects.module.scss'
import { projects } from '../../data/projects'

const Projects: React.FC = () => {
  return (
    <section id="work" className={`${styles.projects} section`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Work</h2>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article key={project.id} className={styles.project}>
              <div className={styles.projectContent}>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <ul className={styles.techList}>
                    {project.tech.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>

                  <div className={styles.projectLinks}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        Visit Site <ExternalLink size={16} />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {project.image && (
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
