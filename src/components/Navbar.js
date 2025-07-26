import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

export default function Navbar() {
  useEffect(() => {
    const toggleButton = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('navbar-links');

    const toggleMenu = () => {
      navLinks.classList.toggle('active');
    };

    toggleButton.addEventListener('click', toggleMenu);

    return () => {
      toggleButton.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Portafolio</div>

      <button className="menu-toggle" id="menu-toggle">
        &#9776;
      </button>

      <div className="navbar-links" id="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </nav>
  );
}
