import "./styles/TechnicalSkills.css";

const skillGroups = [
  {
    category: "Programming",
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    category: "Data Structures & Algorithms",
    skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting & Searching"],
  },
  {
    category: "Core Computer Science",
    skills: ["Operating Systems", "Computer Organization", "DBMS"],
  },
  {
    category: "Databases",
    skills: ["SQL (MySQL)", "MongoDB (Basics)"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (Basics)", "Git & GitHub", "Docker (Familiarity)"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Scikit-learn", "Pandas", "NumPy"],
  },
];

const TechnicalSkills = () => {
  return (
    <div className="skills-section section-container">
      <h2>Technical <span>Skills</span></h2>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div className="skill-group" key={index}>
            <h4>{group.category}</h4>
            <div className="skill-tags">
              {group.skills.map((skill, sIndex) => (
                <span key={sIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
