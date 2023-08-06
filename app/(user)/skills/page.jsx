import React from "react";
import styles from "./styles.module.css";

const Skills = () => {
  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "Java" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Node.js" },
  ];

  return (
    <div className="h-screen w-screen bg-[#C7E8CA] flex justify-center">
      <section className="container">
        <h1 className="text-center sm:text-lg md:text-2xl lg:text-5xl  md:mb-24 md:mt-20">
          SKILLS
        </h1>
        <div class="grid sm:grid-cols-2 md:grid-cols-5 gap-4 ">
          {skills.map((technology, index) => (
            <div className="sm:p-4 md:p-16 rounded-full sm:mb-4 md:mb-4">
              <h2 className="text-center" key={index}>
                {technology.skill}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
