import React, { useState } from 'react';
import '../stylesheets/Home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <section className="inicio-section">
      <div className="inicio-content">
        <div className="inicio-text">
          <h1>Hola, soy Verónica Martínez</h1>
          <p className="subtitulo">Ingeniera en Sistemas Computacionales || Apasionada por construir soluciones eficientes y escalables</p>
          <button className="btn-contact" onClick={handleClick}>
            ¡Contáctame!
          </button>
          {showMessage && (
            <p className="mensaje">¡Gracias por visitar mi portafolio! 😊, si quiere conocer más sobre mí lo invito a seguir navegando!</p>
          )}
          <div className="redes-sociales">
            <button
              onClick={openLinkedIn}
              aria-label="Mi perfil de LinkedIn"
              className="btn-icon"
              type="button"
            >
              <FaLinkedin />
            </button>
            <a href="https://github.com/VeroAmez" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:vero_mtz_08@hotmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
          <div className="inicio-image">
          <img
            src={require(`../imagenes/Veronica.jfif`)}
            alt="Veronica"
          />
        </div>
      </div>
    </section>
  );
}

const openLinkedIn = () => {
  window.open(
    'https://www.linkedin.com/in/veronica-guadalupe-mart%C3%ADnez-amezcua-a107b9308/',
    '_blank',
    'noopener,noreferrer'
  );
};