import React, { useState } from "react";
import Logo from "../assets/logo_png.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("PT-BR");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header>
      {/* Banner de oferta */}
      <div className="navbar-banner">
        <span className="navbar-highlight">SITE:</span> Todos os nossos produtos com entrega rápida! Aproveite.
      </div>

      {/* Navbar principal */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Menu para desktop */}
          <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <a href="#produtos">Produtos</a>
            <a href="https://discord.gg/rcvXacwAh9" target="_blank">Discord</a>
          </div>

          {/* Menu hamburger para mobile */}
          <div
            className="navbar-hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;