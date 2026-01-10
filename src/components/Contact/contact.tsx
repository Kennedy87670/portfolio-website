import React from 'react'
import { Mail, Github as GithubIcon, Linkedin as LinkedinIcon } from 'lucide-react'
import styles from './contact.module.scss'

const Contact: React.FC = () => {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Get In Touch</h2>

        <p className={styles.description}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out!
        </p>

        <div className={styles.contactMethods}>
          <a href="mailto:chukwuemekanwaizugbe@gmail.com" className={styles.contactLink}>
            <Mail size={24} />
            <span>chukwuemekanwaizugbe@gmail.com</span>
          </a>

          <a
            href="https://github.com/Kennedy87670"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <GithubIcon size={24} />
            <span>github.com/Kennedy87670</span>
          </a>

          <a
            href="https://www.linkedin.com/in/chukwuemeka-nwaizugbe-2b6b45353"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <LinkedinIcon size={24} />
            <span>linkedin.com/in/chukwuemeka-nwaizugbe</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
