"use client"
import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./styles.module.css";


function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        background: '#001524',
        transformOrigin: '0%'
      }} />

      <div className="h-screen w-full">
        <div id={styles.home} className="container ">
          <h1 className={styles.greetings}>welcome!</h1>
          <h1 className={styles.to}> to</h1>
          <h1 className={styles.greetingsSecond}>my portfolio <br /></h1>
          <h1 className={styles.website}> website</h1>

        </div>

      </div>

    </>
  )
}

export default Home