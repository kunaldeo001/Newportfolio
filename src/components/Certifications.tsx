import "./styles/Certifications.css";
import { MdVerified } from "react-icons/md";

const certifications = [
  { name: "Coding Ninjas 10X Club", status: "Completed" },
  { name: "IIT Kharagpur Data Analytics Workshop", status: "Completed" },
  { name: "Intel AI Aware and AI Appreciate", status: "Completed" },
  { name: "SkillUp: Machine Learning using Python", status: "Completed" },
  { name: "Infosys Artificial Intelligence", status: "Completed" },
  { name: "Deloitte Technology Job Simulation", status: "Completed" },
  { name: "Cisco Cybersecurity Course", status: "Completed" },
  { name: "Accenture Digital Skill: Artificial Intelligence", status: "Completed" },
  { name: "HP Future-Ready AI Program", status: "Completed" },
  { name: "Google & AICTE AI-ML Virtual Internship", status: "Completed" },
  { name: "Coursera Python for Everybody", status: "Completed" },
  { name: "AWS Academy Cloud Foundations", status: "In Progress" },
];

const clubs = [
  { name: "IEEE SRMIST SSIT", role: "R&D Member" },
];

const Certifications = () => {
  return (
    <div className="certifications-section section-container">
      <div className="certifications-container">
        <div className="certs-left">
          <h2>Certifications <span>&</span> Training</h2>
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <div className="cert-card" key={index}>
                <MdVerified className="cert-icon" />
                <div className="cert-info">
                  <h4>{cert.name}</h4>
                  <p>{cert.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="certs-right">
          <h2>Clubs <span>&</span> Organizations</h2>
          <div className="clubs-list">
            {clubs.map((club, index) => (
              <div className="club-card" key={index}>
                <h4>{club.name}</h4>
                <p>{club.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
