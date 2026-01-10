import React from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Link } from 'react-scroll'
import styles from './footer.module.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Kennedy87670'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/chukwuemeka-nwaizugbe-2b6b45353'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:chukwuemekanwaizugbe@gmail.com'
    }
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.copyright}>
              © {currentYear} Johnkennedy Nwaizugbe. All rights reserved.
            </p>
            <p className={styles.tagline}>
              Built with React, TypeScript & SCSS
            </p>
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <Link
            to="home"
            smooth={true}
            duration={500}
            className={styles.backToTop}
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
