"use client";
import React from "react";
import styles from "./styles.module.css";

function Home() {
  return (
    <section className="w-screen h-screen bg-[#f4a35a]">
      <div className="flex flex-col items-center justify-center h-screen">
        <img src="../elifozker.png" alt="Image" className="md:w-[28rem] md:h-[28rem] mb-16"></img>
        <p className="text-5xl font-bold">WELCOME!</p>
      </div>
    </section>
  );
}

export default Home;
