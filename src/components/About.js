import '../stylesheets/About.css';

export default function About() {
  return (
    <section className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="titulo-sobre-mi">Sobre mí</h2>

        <div className="texto-sobre-mi">
          <div className="bloque">
            <p>
              Soy Verónica Martínez, Ingeniera en Sistemas Computacionales con pasión por crear soluciones tecnológicas eficientes y escalables. 
              Durante mis prácticas profesionales en APEAJAL, desarrollé un sistema integral para la trazabilidad de la industria del aguacate en Jalisco, aplicando y perfeccionando habilidades en desarrollo backend y frontend.
            </p>
            <p>
              Me especializo en desarrollo backend con conocimientos sólidos en JavaScript, PHP y manejo de bases de datos. Mi objetivo es escribir código limpio, seguro y modular, siempre con enfoque en la experiencia del usuario. Disfruto trabajar en equipo, aprender nuevas tecnologías y afrontar nuevos desafíos que me permitan crecer profesionalmente.
            </p>
          </div>

          <div className="bloque">
            <h3>Formación académica</h3>
            <ul>
              <li>
                <strong>Bachillerato:</strong> CBTIS 226 de Ciudad Guzmán, modalidad técnico en programación. Bases fundamentales en programación, redes y bases de datos.
              </li>
              <li>
                <strong>Licenciatura:</strong> Ingeniería en Sistemas Computacionales en el Tecnológico de Ciudad Guzmán. Con especialidad en Inteligencia Artificial Aplicada. Materias terminadas en diciembre 2024, graduación en marzo 2025 y titulación en abril 2025.
              </li>
            </ul>
          </div>

          <div className="bloque">
            <h3>Habilidades técnicas</h3>
            <ul>
              <li>JavaScript (Avanzado), PHP (Avanzado), Python (Intermedio), Java (Avanzado)</li>
              <li>React, CSS, HTML</li>
              <li>MySQL, PHPMyAdmin</li>
              <li>Git y GitHub</li>
            </ul>
          </div>

          <div className="bloque">
            <h3>Proyectos destacados</h3>
            <p>
              Durante mis prácticas en APEAJAL desarrollé un sistema integral para la trazabilidad del aguacate en Jalisco, implementando funcionalidades backend en PHP y frontend en CSS, mejorando la eficiencia del registro y consulta de datos.
            </p>
          </div>

          <div className="bloque">
            <h3>Soft skills</h3>
            <p>
              Me considero una persona organizada, proactiva, con buena comunicación y gran capacidad para resolver problemas bajo presión.
            </p>
          </div>

          <div className="bloque">
            <h3>Metas profesionales</h3>
            <p>
              Quiero especializarme en desarrollo full stack, aprender metodologías ágiles y contribuir a proyectos innovadores con impacto social.
            </p>
          </div>

          <div className="bloque">
            <h3>Intereses personales</h3>
            <p>
              Disfruto la lectura, la música y pasar momentos agradables con mi familia, actividades que me ayudan a mantener un equilibrio entre lo profesional y lo personal.
            </p>
          </div>

          <div className="bloque">
            <h3>Idiomas</h3>
            <p>Español (Nativo), Inglés (Intermedio)</p>
            <p>
              Diplomados en Inglés:{" "}
              <a
                href="/docs/CENI_VM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Descargar certificado Cenni
              </a>
              {" "}
              <a
                href="/docs/Becalos_VM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Descargar certificado Becalos
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
