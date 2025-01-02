import React from "react";
import BettaLogo from "../assets/betta_icon.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo e texto */}
        <div className="footer-brand">
          <div className="logo">
            <img src={BettaLogo} alt="" />
          </div>
          <p>Desenvolvido por <a href="https://bettaagency.com.br/" target="_blank" className="highlight">Betta Agency</a></p>
        </div>

        {/* Ícones de redes sociais */}
        <div className="footer-socials">
          <a href="https://discord.gg/rcvXacwAh9" target="_blank" className="social-icon">
            <i className="bi bi-discord"></i>
          </a>
          <a href="https://www.youtube.com/@CacheStore-Cheat" target="_blank" className="social-icon">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>

      {/* Linha divisória */}
      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>Copyright © 2025 - Cache Store.</p>
      </div>
    </footer>
  );
};

export default Footer;