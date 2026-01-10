import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import styles from './projectCard.module.scss'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  image?: string
  liveUrl?: string
  repoUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  image,
  liveUrl,
  repoUrl,
}) => {
  return (
    <article className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.overlay}>
            <div className={styles.links}>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                  aria-label="View live site"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
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
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.techStack}>
          {tech.map((t) => (
            <span key={t} className={styles.techTag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
