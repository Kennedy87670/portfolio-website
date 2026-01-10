import React from "react";
import styles from "./about.module.scss";
import profileImage from "../../assets/images/ME.jpg";
import kodecampLogo from "../../assets/images/kodecamp.png";
import unionLogo from "../../assets/images/unionsystem.png";

const About: React.FC = () => {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>About Me</h2>

        <div className={styles.aboutContent}>
          <div className={styles.imageWrapper}>
            <img
              src={profileImage}
              alt="Johnkennedy Nwaizugbe"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.textContent}>
            <p>
              I turn complex problems into elegant, performant solutions. With
              2+ years building production applications, I've optimized systems
              serving 50,000+ daily users and reduced load times by 40% through
              strategic performance engineering.
            </p>

            <p>
              I specialize in React.js, Next.js, React-Native, and
              TypeScript—crafting interfaces that are fast, accessible, and
              delightful to use. From enterprise banking platforms to AI-powered
              healthcare systems, I build applications that scale.
            </p>

            <p>
              When I'm not shipping features, I'm obsessing over code quality,
              exploring new patterns, and contributing to projects that solve
              real-world challenges. Let's build something exceptional together.
            </p>
          </div>
        </div>

        <div className={styles.companies}>
          <h3>Companies I've worked with</h3>
          <div className={styles.companyLogos}>
            <div className={styles.companyItem}>
              <img src={unionLogo} alt="Union Systems Limited" />
              <span>Union Systems Limited</span>
            </div>
            <div className={styles.companyItem}>
              <img src={kodecampLogo} alt="KodeCamp" />
              <span>KodeCamp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
