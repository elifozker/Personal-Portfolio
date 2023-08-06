"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = () => {
  // splitting text into letters
  const letters = Array.from(
    "Hello I am Elif,a 4th-year Computer Engineering student at Dokuz Eylül University. Junior full-stack web developer based in Izmir. I have a strong passion for web development and love exploring its various facets. I have a passion for frontend development. Creating visually appealing and user-friendly interfaces excites me. I love combining my creativity with technical skills to bring ideas to life on the web. Exploring new design trends and modern frontend technologies keeps me inspired and motivated. Keep scroooll!!"
  );

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div id="about" className="w-screen h-screen bg-[#F9F9F9]">
      <div className="container pt-44">
        <section className="mx-auto justify-items-center">
          <p className="sm:text-lg md:text-3xl md:leading-loose">
            <motion.div
              className="flex flex-wrap items-center justify-center"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="sm:text-lg md:text-3xl md:leading-loose"
                  variants={child}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AnimatedTextCharacter;
