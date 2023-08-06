"use client";

import styles from "../../styles/fonts.module.css";
const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Repo", href: "#repo" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 z-20">
    <div className="container max-w-7xl mx-auto flex justify-between items-center">
      <div>
        <h1
          className={`text-black md:text-2xl sm:text-base tracking-widest ${styles.outfit}`}
        >
          elo
        </h1>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4 md:text-base">
        {navigation.map((item) => (
          <a
            href={item.href}
            className="text-black text-sm sm:text-base"
            key={item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  </nav>
  
  
  );
}
