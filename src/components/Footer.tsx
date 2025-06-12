import { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="custom-footer">
        <div className="footer-container">
          <span className="footer-text">
            © 2025 <a href="https://www.linkedin.com/in/bruno-h-vela-648b431a7/" className="footer-link">Bruno Huaman</a>. All Rights Reserved.
          </span>
          <ul className="footer-nav">
            <li>
              <button onClick={() => setModalOpen(true)} className="footer-link contact-button">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Reach out to me:</h2>
            <p>Email: <a href="mailto:bhvela2000@gmail.com">bhvela2000@gmail.com</a></p>
            <p>RU Phone: +7 961 765 19-94</p>
            <p>PE Phone: +51 979 948 448</p>
            <button onClick={() => setModalOpen(false)} className="modal-close-btn">Close</button>
          </div>
        </div>
      )}
    </>
  );
}