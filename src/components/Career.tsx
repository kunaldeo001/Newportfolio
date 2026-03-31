import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>DigiSys Innosol Pvt Ltd</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Gaining hands-on experience in web development, contributing to
              innovative software solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Codeclause</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Successfully completed a web development internship, working on
              various frontend and backend tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Codesoft</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Contributed to web development projects as an intern, enhancing
              technical skills and professional growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science (Core)</h4>
                <h5>SRM Institute of Science and Technology</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Second Year Undergraduate at Kattankulathur, Chennai. Maintaining a
              strong academic record and active participation in clubs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
