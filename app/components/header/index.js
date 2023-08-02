import React from 'react'
import Link from "next/link"
import styles from './styles.module.css';

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          E
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">TECHS</Link>
          <Link href="#">MY WORKS</Link>
          <Link href="#">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header