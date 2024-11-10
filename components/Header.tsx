import Image from 'next/image'
import React from 'react'
import Logo from '../public/assets/owais_logo.png'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logoLink}>
          <Image src={Logo} width={80} height={40} alt={'logo'} />
        </Link>
        <nav className={styles.nav}>
          <Link href={"/"} className={styles.navLink}>HOME</Link>
          <Link href={"/about"} className={styles.navLink}>ABOUT</Link>
          <Link href={"/projects"} className={styles.navLink}>PROJECTS</Link>
          <Link href={"/skills"} className={styles.navLink}>SKILLS</Link>
          <Link href={"/contact"} className={styles.navLink}>CONTACT</Link>
        </nav>
        <button className={styles.hireButton}>
          <Link className={styles.btntext} href={"/contact"}>HIRE ME</Link>
          <span className={styles.icon}><FaArrowRight /></span>
        </button>
      </div>
    </header>
  )
}

export default Header
