import Image from "next/image";
import React from "react";
import Project from "../public/assets/Project.webp";
import Project_1 from "../public/assets/Project (1).webp"
import Project_2 from "../public/assets/Project (2).webp"
import Project_3 from "../public/assets/Project (3).webp"
import Project_4 from "../public/assets/Project (4).webp"
import Project_5 from "../public/assets/Project (5).webp"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <section id="project" className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>See My Previous Work</h3>
        <h2 className={styles.title}>Projects</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={Project}
                alt="Landscape and Gardening Website"
                width={500}
                height={300}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.category}>WordPress</h2>
                <h1 className={styles.projectTitle}>Landscape and Gardening Website</h1>
                <p className={styles.description}>
                  Created a website for a leading landscape and gardening service provider, effectively communicating their expertise and attracting new clients.
                </p>
                <div className={styles.linkWrapper}>
                  <Link href="#" className={styles.learnMoreLink}>
                    Learn More
                    <span className={styles.arrowIcon}>
                      <FaRegArrowAltCircleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={Project_5}
                alt="One Rupee Raffle Website"
                width={500}
                height={300}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.category}>WordPress</h2>
                <h1 className={styles.projectTitle}>One Rupee Raffle Website</h1>
                <p className={styles.description}>
                  A new and exciting one-rupee raffle website, designed to create a user-friendly and trustworthy platform in the competitive raffle market.
                </p>
                <div className={styles.linkWrapper}>
                  <Link href="#" className={styles.learnMoreLink}>
                    Learn More
                    <span className={styles.arrowIcon}>
                      <FaRegArrowAltCircleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={Project_2}
                alt="Furniture & Interior Design Website"
                width={500}
                height={300}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.category}>WordPress</h2>
                <h1 className={styles.projectTitle}>Furniture & Interior Design Website</h1>
                <p className={styles.description}>
                  Designed a website for a renowned furniture store and interior design firm, blending their exquisite furniture offerings with design expertise.
                </p>
                <div className={styles.linkWrapper}>
                  <Link href="#" className={styles.learnMoreLink}>
                    Learn More
                    <span className={styles.arrowIcon}>
                      <FaRegArrowAltCircleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={Project_3}
                alt="Coffee Cafe Website"
                width={500}
                height={300}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.category}>WordPress</h2>
                <h1 className={styles.projectTitle}>Coffee Cafe Website</h1>
                <p className={styles.description}>
                  Developed a website for a charming coffee cafe that lacked an online presence. The website highlights their unique charm and serves as a user-friendly platform.
                </p>
                <div className={styles.linkWrapper}>
                  <Link href="#" className={styles.learnMoreLink}>
                    Learn More
                    <span className={styles.arrowIcon}>
                      <FaRegArrowAltCircleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={Project_4}
                alt="Online Quran Academy Website"
                width={500}
                height={300}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.category}>WordPress</h2>
                <h1 className={styles.projectTitle}>Online Quran Academy Website</h1>
                <p className={styles.description}>
                  Created a website for a leading online Quran academy, effectively communicating their educational offerings and attracting new students.
                </p>
                <div className={styles.linkWrapper}>
                  <Link href="#" className={styles.learnMoreLink}>
                    Learn More
                    <span className={styles.arrowIcon}>
                      <FaRegArrowAltCircleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

           <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={Project_1}
                alt="Home Improvement Ecommerce Website"
                width={500}
                height={300}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.category}>WordPress</h2>
                <h1 className={styles.projectTitle}>Home Improvement Ecommerce Website</h1>
                <p className={styles.description}>
                  Designed a user-friendly ecommerce website for homeowners to find the right tools and gadgets for their home improvement projects.
                </p>
                <div className={styles.linkWrapper}>
                  <Link href="#" className={styles.learnMoreLink}>
                    Learn More
                    <span className={styles.arrowIcon}>
                      <FaRegArrowAltCircleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
