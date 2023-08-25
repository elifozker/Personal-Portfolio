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
    <div id="skills" className="bg-[#cbf078]">
      <div className="container mx-auto flex flex-col items-center pt-2 pb-32 rounded-md">
        <h1 className="text-center text-lg font-semibold mt-10 mb-4">SKILLS</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="flex pointer rounded-full h-40 w-40 bg-[#fcfefe] border-2 border-[#f8fe85] hover:border-[#ffbe0b] p-8 flex-col justify-center items-center hover:shadow-md hover:scale-105 transition-all duration-300">
                <div className="mb-3">
                  <h2 className="text-[#233142] text-lg font-medium text-center hover:tracking-wider">
                    {skill.skill}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
