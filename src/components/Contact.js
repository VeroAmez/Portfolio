import React, { useState } from 'react';
import '../stylesheets/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa';
import emailjs from 'emailjs-com';


export default function Contact() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      setError('Por favor llena todos los campos');
      return;
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;


    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setEnviado(true);
        setError('');
        setFormData({ nombre: '', correo: '', mensaje: '' });
      }, (err) => {
        setError('Error al enviar el mensaje, intenta de nuevo más tarde.');
        console.error(err);
      });
  };

  return (
    <section className="contacto-section">
      <h2>Contacto</h2>
      <p>¡Gracias por visitar mi portafolio! Si deseas contactarme para proyectos, colaboraciones o cualquier consulta, por favor llena el formulario o usa los medios abajo.</p>

      {enviado ? (
        <p className="mensaje-exito">¡Gracias! Tu mensaje fue enviado correctamente.</p>
      ) : (
        <form onSubmit={handleSubmit} className="form-contacto">
          <label>
            Nombre:
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </label>
          <label>
            Correo:
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
          </label>
          <label>
            Mensaje:
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
          </label>

          {error && <p className="error">{error}</p>}  {}

          <button type="submit">Enviar</button>
        </form>
      )}

      <div className="contacto-info">
        <p>Email: <a href="mailto:vero_mtz_08@hotmail.com">vero_mtz_08@hotmail.com</a></p>
        <div className="redes-sociales">
          <button
            onClick={openLinkedIn}
            aria-label="Mi perfil de LinkedIn"
            className="btn-icon"
            type="button"
          >
            <FaLinkedin />
          </button>
          <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:vero_mtz_08@hotmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.facebook.com/veronica.martinezamezcua.7" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
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