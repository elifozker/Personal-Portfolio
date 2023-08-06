"use client";
import React from "react";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <section id="home" className="w-screen h-screen bg-[#f4a35a] relative">

        <div className="flex flex-col items-center justify-center h-screen ">
          <img
            src="../elifozker.png"
            alt="Image"
            className="md:w-[28rem] md:h-[28rem] mb-16 z-10  transition-all duration-300 hover:scale-[1.12]"
          ></img>
          <p className="text-5xl font-medium">WELCOME!</p>
        </div>
        <Marquee className="absolute text-7xl top-[-400px] z-0">elo elo elo elo elo elo elo elo elo elo elo elo elo elo elo elo elo
          elo elo 
        </Marquee>
        
    </section>
  );
}

export default Home;
