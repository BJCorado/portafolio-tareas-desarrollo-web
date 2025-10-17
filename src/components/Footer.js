import React from "react";
import { FaGithub,FaFacebook, FaInstagram,FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-glass">
      <div>
        <div>
          <span>BJ CORADO</span>
          <span>•</span>
          <span>© {year} Todos los derechos reservados</span>
        </div>

        <nav aria-label="Redes sociales">
          {/* Reemplaza los href con tus enlaces */}
          <a href="https://github.com/BJCorado" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://facebook.com/BJCorado" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com/bj.corado" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/5025156-2736" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="mailto:brayancorado454@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </nav>
      </div>
    </footer>
  );
}
