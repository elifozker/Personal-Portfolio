import React from "react";
import styles from "./styles.module.css";
function About() {
  return (
    <div id="about" className="w-screen h-screen bg-[#F9F9F9]">
    <div className="container pt-44">
      <section className="mx-auto justify-items-center">
        <p className="sm:text-lg md:text-3xl md:leading-loose">
          <em>Hello</em> I am Elif, <br />a 4th-year Computer Engineering
          student at Dokuz Eylül University.
          Junior full-stack web developer based in Izmir. I have
          a strong passion for web development and love exploring its various
          facets. I have a passion for frontend development. Creating visually
          appealing and user-friendly interfaces excites me. I love combining
          my creativity with technical skills to bring ideas to life on the
          web. Exploring new design trends and modern frontend technologies
          keeps me inspired and motivated.
        </p>
      </section>
    </div>
  </div>
  
  );
}

export default About;
