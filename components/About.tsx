import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from '../Styles/about.module.css'

const About = () => {
  return (
    <section id="aboutSection" className={styles['aboutSection']}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.aboutHeading}>About Me!</h3>
          <h2 className={styles.mainTitle}>Crafting Websites & Fueling Growth with AI</h2>
        </div>
        <div className={styles.contentWrapper}>
          <p className={styles.contentText}>
            I&apos;m Owais, an enthusiastic developer, digital marketing strategist, and aspiring AI integrator. <br />
            My passion lies in crafting high-performing websites, optimizing them for search engines, and developing data-driven digital marketing strategies - all powered by a commitment to continuous learning and exploration of AI&apos;s potential.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/contact">
              <button className={styles.buttonPrimary}>
                Contact Me
              </button>
            </Link>
            <Link href="#project" className={styles.buttonSecondary}>
              Learn More
              <span className={styles.arrowIcon}>
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
