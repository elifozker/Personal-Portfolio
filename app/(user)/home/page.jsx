"use client";
import React from "react";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <section id="home" className="w-auto h-screen bg-[#f4a35a] relative">
      <div className="flex flex-col items-center justify-center h-screen ">
        <img
          src="../elifozker.png"
          alt="Image"
          className="md:w-[28rem] md:h-[28rem] mb-16 z-10 transition-all duration-300 hover:scale-[1.12]"
          style={{ maxWidth: "80%", maxHeight: "80vw" }} // Mobil için resmi küçültmek için stil ekledik
        ></img>
        <p className="text-5xl font-medium">WELCOME!</p>
      </div>
      <Marquee className="absolute sm:text-8xl md:text-7xl top-[-400px] z-0" direction="left">
         elo elo elo elo elo elo elo elo elo elo elo elo elo elo elo elo elo elo elo
        elo elo
      </Marquee>
    </section>
  );
}

export default Home;
