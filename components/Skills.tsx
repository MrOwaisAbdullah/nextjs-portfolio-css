import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaReact, FaShopify } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import styles from "../styles/skills.module.css";

const Skills = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h3 className={styles.subheading}>Areas of Expertise</h3>
          <h1 className={styles.title}>My Skills</h1>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.html}><FaHtml5 /></span>
            </div>
            <h2 className={styles.cardTitle}>HTML</h2>
            <p className={styles.cardDescription}>
              Building the structural foundation of web pages with HTML.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.css}><FaCss3Alt /></span>
            </div>
            <h2 className={styles.cardTitle}>CSS</h2>
            <p className={styles.cardDescription}>
              Styling and laying out web pages with CSS for a visually appealing user experience.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.typescript}><BiLogoTypescript /></span>
            </div>
            <h2 className={styles.cardTitle}>JavaScript/TypeScript</h2>
            <p className={styles.cardDescription}>
              Creating dynamic and interactive web applications for a seamless user experience.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.react}><FaReact /></span>
            </div>
            <h2 className={styles.cardTitle}>ReactJs/NextJs</h2>
            <p className={styles.cardDescription}>
              Developing efficient and scalable front-end applications with React and Next.js for a faster and more responsive user interface.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.shopify}><FaShopify /></span>
            </div>
            <h2 className={styles.cardTitle}>WordPress/Shopify</h2>
            <p className={styles.cardDescription}>
              Building and customizing WordPress websites & Shopify Stores to create powerful and flexible online platforms.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.marketing}><MdAutoGraph /></span>
            </div>
            <h2 className={styles.cardTitle}>Digital Marketing</h2>
            <p className={styles.cardDescription}>
              Driving online growth through strategic SEO, PPC, content marketing, and social media campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
