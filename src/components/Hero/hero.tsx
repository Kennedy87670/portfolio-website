import React from "react";
import { Link } from "react-scroll";
import { ArrowDown } from "lucide-react";
import styles from "./hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.label}>Mobile & Frontend Engineer</p>

          <h1 className={styles.name}>
            Chukwuemeka Johnkennedy
            <br />
            Nwaizugbe
          </h1>

          <p className={styles.description}>
            Frontend & Mobile Engineer with 4+ years of professional experience
            (internship + full-time) building scalable, secure, and
            high-performance applications across web and mobile platforms.
            Highly skilled in React.js, Next.js, TypeScript, and modern frontend
            architectures, with growing expertise in mobile development using
            React Native. Experienced in collaborating within microservices
            ecosystems, optimizing enterprise banking systems serving 50,000+
            daily users, and delivering SEO-optimized, accessible, and
            user-centric solutions. Passionate about crafting performant digital
            experiences that scale seamlessly across devices and platforms.
          </p>

          <div className={styles.ctas}>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className={styles.ctaPrimary}
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={styles.ctaSecondary}
            >
              Let's Talk
            </Link>
          </div>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className={styles.scrollDown}
          >
            <ArrowDown size={20} />
            <span>Scroll to explore</span>
          </Link>
        </div>
      </div>

      <div className={styles.decoration}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>

        {/* Floating particles */}
        <div className={styles.particles}>
          {Array.from({ length: 20 }, (_, i) => {
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = 3 + Math.random() * 4;

            return (
              <div
                key={i}
                className={styles.particle}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
