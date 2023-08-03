"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./styles.module.css";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <section id="home" className="h-auto w-full bg-[#F9F9F9] pb-60">
        <div className="container mx-auto flex flex-col justify-center items-start">
          <div className="flex flex-col sm:text-[40px] md:text-[96px] text-[#272829]">
            <p id={styles.greetings} className="mt-12 mb-4">
              WELCOME!
            </p>
            <p id={styles.to} className="sm:ml-12 md:ml-36 mb-4">
              TO
            </p>
            <p id={styles.myPortfolio} className="mb-4">
              MY PORTFOLIO
            </p>
            <p id={styles.website} className="sm:ml-12 md:ml-36 ">
              WEBSITE
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Home;

