"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../public/assets/owais_logo.png';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isoOpen, setisoOpen] = useState(false);

  function handleLinkClick() {
    setisoOpen(false); 
  }

  function getMenuClassNames(){
    return isoOpen ? styles.navOpen : styles.nav;
  }

  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={Logo} width={80} height={40} alt="logo" />
        </Link>

        <nav className={getMenuClassNames()}>
          <Link href="/" onClick={handleLinkClick} className={styles.navLink}>HOME</Link>
          <Link href="/about" onClick={handleLinkClick} className={styles.navLink}>ABOUT</Link>
          <Link href="/projects" onClick={handleLinkClick} className={styles.navLink}>PROJECTS</Link>
          <Link href="/skills" onClick={handleLinkClick} className={styles.navLink}>SKILLS</Link>
          <Link href="/contact" onClick={handleLinkClick} className={styles.navLink}>CONTACT</Link>

          <button className={styles.hireButton}>
            <Link href="/contact" onClick={handleLinkClick} className={styles.btntext}>HIRE ME</Link>
            <FaArrowRight className={styles.icon} />
          </button>
        </nav>

        <button
          className={styles.mobileMenuToggle}
          onClick={() => setisoOpen(!isoOpen)}
        >
          {isoOpen ? <CgClose /> : <CgMenuRight />}
        </button>
      </div>
    </header>
  );
}

export default Header;