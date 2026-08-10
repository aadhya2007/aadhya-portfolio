import "./SkillCard.css";

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <h3>{skill.name}</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>

      <p>{skill.level}%</p>
    </div>
  );
}

export default SkillCard;
