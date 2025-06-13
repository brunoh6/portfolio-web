import profileImg from "../assets/finale.png";
import "../styles/Home.css";
import linuxIcon from "../assets/linux.svg";
import networkIcon from "../assets/network.svg";
import hackerIcon from "../assets/hacker.svg";
import kaliIcon from "../assets/kali.svg";
import pythonIcon from "../assets/python.svg";
import postgresIcon from "../assets/postgresql.svg";
import isoIcon from "../assets/iso.svg";
import crypIcon from "../assets/safety.svg";

export default function Home() {
  return (
    <section className="home-section">
      {/* Bloque de presentación */}
      <div className="about-block">
        <h2 className="about-title">Bruno Paolo Huaman Vela</h2>
        <h4 className="place-title">Lima, Peru | Yekaterinburg, Russia</h4>
        <p className="about-text">
        I'm a cybersecurity student and aspiring analyst with a strong focus on Linux systems, network defense, and industrial control system protection. I enjoy building and analyzing labs that simulate real-world cyber threats, always aiming to improve detection and response.
        </p>
      </div>

      <img
        src={profileImg}
        alt="Bruno Huaman"
        className="profile-img"
      />

      {/* Strength boxes */}
      <a
  href="https://github.com/brunoh6/linux-threat-detection"
  target="_blank"
  rel="noopener noreferrer"
  className="strength-box box-top-left"
>
  <h3 className="strength-title">Linux Security</h3>
  <p className="info-text">Syslog, auditd, hardening, threat detection</p>
</a>

<a
  href="https://github.com/brunoh6/layer2-security-labs"
  target="_blank"
  rel="noopener noreferrer"
  className="strength-box box-top-right"
>
  <h3 className="strength-title">Networking</h3>
  <p className="info-text">Routing, VLANs, Layer 2 security, Wireshark</p>
</a>

<a
  href="https://github.com/brunoh6/postgresql-cve-exploitation"
  target="_blank"
  rel="noopener noreferrer"
  className="strength-box box-bottom-left"
>
  <h3 className="strength-title">Pentesting</h3>
  <p className="info-text">Metasploit, CVE labs, reverse shells, forensics</p>
</a>

<a
  href="https://github.com/brunoh6/proxy-auth"
  target="_blank"
  rel="noopener noreferrer"
  className="strength-box box-bottom-right"
>
  <h3 className="strength-title">Proxy Authentication</h3>
  <p className="info-text">Ubuntu Server, Squid + ACL, advanced networking</p>
</a>

      {/* Bloque de aptitudes / skills */}
      <div className="skills-block">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src={linuxIcon} alt="Linux" className="skill-icon" />
            <span>Linux Hardening</span>
          </div>
          <div className="skill-item">
            <img src={networkIcon} alt="Networking" className="skill-icon" />
            <span>Networking Advanced</span>
          </div>
          <div className="skill-item">
            <img src={hackerIcon} alt="Pentesting" className="skill-icon" />
            <span>Penetration Testing</span>
          </div>
          <div className="skill-item">
            <img src={kaliIcon} alt="Kali" className="skill-icon" />
            <span>Metasploit</span>
          </div>
          <div className="skill-item">
            <img src={postgresIcon} alt="Postgresql" className="skill-icon" />
            <span>PostgreSQL Management</span>
          </div>
          <div className="skill-item">
            <img src={pythonIcon} alt="Python" className="skill-icon" />
            <span>Python Development</span>
          </div>
          <div className="skill-item">
            <img src={isoIcon} alt="Python" className="skill-icon" />
            <span>International Standards Implementation</span>
          </div>
          <div className="skill-item">
            <img src={crypIcon} alt="Python" className="skill-icon" />
            <span>Data Protection</span>
          </div>
        </div>
      </div>
    </section>
  );
}