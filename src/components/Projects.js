import React from "react";
import '../stylesheets/Projects.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function Projects() {
  return (
    <section>
        <h2 className="titulo">Proyectos</h2>
        <div className="App">
            {proyectos.map((proyecto, index) => (
                <div className='contenedor-proyecto' key={index}>
                    <div className="carousel-wrapper"S>
                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            autoPlay={true}
                            showThumbs={false}
                            showStatus={false}
                            interval={5000}
                        >
                            {proyecto.imagenes.map((src,i) => ( 
                                <div key={i}>
                                    <img
                                        className="imagen-proyecto"
                                        src={require(`../imagenes/${src}`)}
                                        alt={`Imagen ${i + 1} de ${proyecto.titulo}`}
                                    />
                                    </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className='contenedor-texto-proyecto'>
                        <h3 className="nombre-proyecto">{proyecto.titulo}</h3>
                        <p className="textto-proyecto">{proyecto.descripcion}</p>
                        <p className="herramientas-proyecto">{proyecto.herramientas}</p>
                        {proyecto.link ? (
                            <a
                                className="herramientas-proyecto"
                                href={proyecto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver proyecto
                            </a>
                        ) : (
                            <span className="herramientas-proyecto proyecto-privado">
                                Proyecto privado
                            </span>
                        )}

                    </div>
                </div>
            ))}
            
        </div>    
    </section>
       
  );
}


const proyectos = [
  {
    titulo: "Sistema APEAJAL",
    descripcion: " Desarrollo de un sistema integral web y móvil para la industria del aguacate en el estado de Jalisco, orientado a la gestión eficiente de información, trazabilidad de procesos y visualización de datos. El sistema cuenta con una arquitectura multiusuario, control de accesos por roles y conexión a base de datos en servidor para un manejo seguro y centralizado de la información.",
    herramientas: "Desarrollado con: HTML, CSS, PHP, PHPMyAdmin, JavaScript, JSON, Git",
    imagenes: ["APEAJAL_INICIO.png", "APEAJAL_MENU.png", "APEAJAL_REPORTES_TABLAS.png", "APEAJAL_FORMULARIOS.png"],
    link: null
  },
  {
    titulo: "Casa Domótica",
    descripcion: "Desarrollo de un sistema de automatización residencial que integra sensores ambientales, actuadores y un asistente virtual controlado por voz para optimizar la comodidad, seguridad y eficiencia energética del hogar. El proyecto incluye monitoreo en tiempo real de temperatura, control automatizado de iluminación y puertas, y alertas preventivas mediante sensores de proximidad, todo gestionado con Arduino y un backend en Python (Flask) conectado a una base de datos MySQL.",
    herramientas: "Desarrollado con: Python, Flask, Arduino, HTML, CSS, PHP, Bootstrap, MySQL, Serial, Git.",
    imagenes: ["CASA_MAQUETA.png", "CASA_MAQUETA2.jpg", "CASA_FUNCIONAMIENTO.png", "CASA_SOFTWARE_MOVIL.png" ],
    link: "https://github.com/VeroAmez/Casa-Domotica"
  },
  {
    titulo: "NOVA: Neural Organization for Voice and Assistance",
    descripcion: "Diseño e implementación de un asistente inteligente que combina visión artificial (YOLOv8), reconocimiento facial, comandos de voz, y procesamiento de lenguaje natural para ofrecer una interacción humano-máquina contextual, proactiva y personalizada. NOVA es capaz de identificar personas y objetos en tiempo real, procesar comandos hablados, emitir respuestas por voz y ejecutar acciones automatizadas, como controlar luces o enviar alertas de seguridad. El sistema aprende del entorno y del usuario, mejorando progresivamente su capacidad de respuesta.",
    herramientas: "Desarrollado con: Python, YOLOv8, OpenCV, Flask, OpenAI API, SpeechRecognition, Pyttsx3, MySQL, Git",
    imagenes: ["NOVA_VERO.png", "NOVA_ALEX.png"],
    link: "https://github.com/VeroAmez/NOVA"
  },

  
];

