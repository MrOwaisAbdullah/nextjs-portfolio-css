import React from "react"
import owais from "../public/assets/Owais Abdullah.png"
import Image from "next/image"
import { Typewriter } from "nextjs-simple-typewriter"
import { FaChevronRight } from "react-icons/fa"
import { RiNextjsLine, RiWordpressLine } from "react-icons/ri"
import { TbBrandTypescript } from "react-icons/tb"
import Link from "next/link"
import styles from "../styles/hero.module.css"

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.introSection}>
          <h2 className={styles.welcomeText}>WELCOME TO MY WORLD</h2>
          <h1 className={styles.heroTitle}>
            Hi, I&apos;m <span className={styles.accentText}>Owais Abdullah</span>
            <br />
            {"a "}
            <span>
              <Typewriter
                words={[
                  "Web Developer.",
                  "Digital Marketer.",
                  "Professional Coder.",
                  "AI Architect.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className={styles.heroDescription}>
            I craft high-performing WordPress websites, optimize them for search
            engines, and develop data-driven digital marketing strategies - all
            powered by my passion for AI. Let&apos;s discuss how I can help your
            business flourish online!
          </p>
          <div className={styles.aboutButtonWrapper}>
            <Link href="#about" >
              <button className={styles.aboutButton}>
                About Me
                <span className={styles.arrowIcon}>
                  <FaChevronRight />
                </span>
              </button>
            </Link>
          </div>
          <p className={styles.bestSkillText}>BEST SKILL ON:</p>
          <div className={styles.skillsContainer}>
            <div title="Wordpress" className={styles.skillIcon}>
              <RiWordpressLine />
            </div>
            <div title="TypeScript" className={styles.skillIcon}>
              <TbBrandTypescript />
            </div>
            <div title="Next JS" className={styles.skillIcon}>
              <RiNextjsLine />
            </div>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.imageOverlay}></div>
          <Image
            src={owais}
            className={styles.heroImage}
            width={400}
            height={100}
            loading="lazy"
            placeholder="blur"
            alt="hero"
          />
        </div>
      </div>
      <div className={styles.divider}></div>
    </section>
  )
}

export default Hero
