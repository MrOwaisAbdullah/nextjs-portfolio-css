import React from "react";
import Image from "next/image";
import Logo from "../public/assets/owais_logo.png";
import Link from "next/link";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link href={"/"} className={styles.footerLogo}>
          <Image src={Logo} width={80} height={40} alt={"logo"} />
        </Link>
        <p className={styles.footerText}>
          © 2024 Owais Abdullah —
          <Link
            href="https://www.linkedin.com/in/mrowaisabdullah/"
            className={styles.footerTextLink}
            target="_blank"
          >
            @MrOwaisAbdullah
          </Link>
        </p>
        <span className={styles.socialIcons}>
          <Link
            href={"https://www.twitter.com/MrOwaisAbdullah"}
            className={`${styles.socialIcon} twitter`}
            target="_blank"
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mrowaisabdullah/"}
            className={`${styles.socialIcon} linkedin`}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href={"https://www.instagram.com/mrowaisabdullah/"}
            className={`${styles.socialIcon} instagram`}
            target="_blank"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href={"https://github.com/MrOwaisAbdullah"}
            className={`${styles.socialIcon} github`}
            target="_blank"
          >
            <FaGithubSquare />
          </Link>
          <Link
            href={"https://www.facebook.com/mrowaisabdullah"}
            className={`${styles.socialIcon} facebook`}
            target="_blank"
          >
            <FaFacebookSquare />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
