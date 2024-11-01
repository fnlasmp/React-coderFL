import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"; // Asegúrate de crear este archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Ubuy Store, la mejor opción.</h1>
      <div className="icons">
        <a target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
