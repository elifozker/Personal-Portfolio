import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/elif-özker-789171260/" target="_blank">
        Elif Özker
      </Link>
    </footer>
  );
}
export default Footer;