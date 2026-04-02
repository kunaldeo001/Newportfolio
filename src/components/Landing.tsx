import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KUNAL
              <br />
              <span>DEO</span>
            </h1>
            <p className="hero-subtext" style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#999', maxWidth: '600px' }}>
              A curious and driven second-year Computer Science student with a passion for building innovative software solutions and exploring the frontiers of technology.
            </p>
          </div>
          <div className="landing-info">
            <h3>Undergraduate &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
