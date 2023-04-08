import React, { useState } from "react";
import "./skills.css";
import { otherProjects, portfolioArray, skills } from "../../data";
import { motion } from "framer-motion";
const EachSkill = ({ eachSkill }) => {
  return (
    <div className="each-skill">
      <div className="img-container">
        <img src={eachSkill?.image} alt="" />
        <em>{eachSkill?.skill}</em>
      </div>
    </div>
  );
};

const Skills = () => {
  const [viewMore, setViewMore] = useState(false);
  const someFilteredSkills = [
    ...skills.filter((skill) => skill.stack === "frontend")?.slice(0, 3),
    ...skills.filter((skill) => skill.stack === "backend")?.slice(0, 3),
    ...skills.filter((skill) => skill.stack === "database")?.slice(0, 3),
  ];
  const frontendSkills = skills.filter(
    (skill) => skill.stack === "frontend" || skill.stack?.includes("frontend")
  );
  const backendSkills = skills.filter(
    (skill) => skill.stack === "backend" || skill.stack?.includes("backend")
  );
  const databaseSkills = skills.filter((skill) => skill.stack === "database");

  return (
    <section className="skills" id="Skills">
      <div className="sk-l-side">
        {!viewMore ? (
          <div className="skills-container">
            {someFilteredSkills.map((skill, i) => (
              <EachSkill key={i} eachSkill={skill} />
            ))}
          </div>
        ) : (
          <div className="all-skills">
            <br />
            <p>Frontend skills</p>
            <div className="skills-container">
              {frontendSkills.map((skill, i) => (
                <EachSkill key={i} eachSkill={skill} />
              ))}
            </div>
            <br />
            <p>Backend skills</p>
            <div className="skills-container">
              {backendSkills.map((skill, i) => (
                <EachSkill key={i} eachSkill={skill} />
              ))}
            </div>
            <br />
            <p>Database skills</p>
            <div className="skills-container">
              {databaseSkills.map((skill, i) => (
                <EachSkill key={i} eachSkill={skill} />
              ))}
            </div>
          </div>
        )}
        <br />
        <a href="#Skills">
          <button onClick={() => setViewMore((prev) => !prev)}>
            {!viewMore ? "View more" : "View less"}
          </button>
        </a>
      </div>
      <div className="sk-r-side">
        <div className="sk-intro">
          <h2>My</h2>
          <h1 className="intro-skills">Skills 🔨</h1>
        </div>
      </div>
    </section>
  );
};

export default Skills;
