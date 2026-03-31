import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a dedicated and motivated undergraduate student with a strong
          foundation in computer science principles. My journey in tech is fueled
          by a relentless curiosity and a commitment to continuous learning and
          growth. I enjoy tackling complex problems and turning ideas into
          tangible, impactful software.
        </p>
        <p className="para" style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#B0F5EA' }}>
          <strong>Goal:</strong> To secure a challenging internship or project-based
          role where I can apply my technical skills, contribute to real-world
          projects, and further develop my abilities as a software engineer under
          expert mentorship.
        </p>
      </div>
    </div>
  );
};

export default About;
