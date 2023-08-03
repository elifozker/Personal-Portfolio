import React from "react";
import styles from "./styles.module.css";

const Techs = () => {
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
    <div className="h-[900px] w-full bg-[#F9F9F9] pt-52">
      <section className="container mx-auto ">
        <h1 id={styles.fontSecond} className="sm:text-[20px] md:text-[56px]">
          TECHS THAT I USE
        </h1>
        <div class="grid grid-cols-5 gap-4 mt-36 ml-24">
          {skills.map((technology) => (
            <div
              id={styles.gradient}
              className="card rounded-3xl w-32 h-16 text-center mb-16 text-[#F9F9F9] transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
            >
              <div className="card-body">
                <h5 id={styles.font} className="card-title mt-1  text-[#F9F9F9] ">{technology.skill}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Techs;
