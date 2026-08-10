import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";

const skills = [
  {
    id: 1,
    name: "Python",
    level: 90,
  },
  {
    id: 2,
    name: "HTML",
    level: 80,
  },
  {
    id: 3,
    name: "C",
    level: 70,
  },
  {
    id: 4,
    name: "JavaScript",
    level: 60,
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
