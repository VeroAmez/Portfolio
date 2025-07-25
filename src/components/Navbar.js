import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Portafolio</div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </nav>
  );
}
