// src/pages/inicio.js
import { FaUniversity, FaUserTie, FaEnvelope, FaPhone, FaBookOpen, FaIdBadge } from "react-icons/fa";

function Inicio() {
  return (
    <div className="container main-content">
      
        {/* Encabezado con logo y título */}
        <div className="text-center mb-4">
          <img
            src="/logo.png" alt="Logo de la Universidad Mariano Gálvez"className="inicio-logo mb-3" />
          <h2 className="mb-2">Portafolio De Tareas</h2>
          <p className="mb-2">
            Este portafolio reúne tareas, investigaciones y proyectos desarrollados durante el curso.
          </p>
        </div>

        {/* Datos generales */}
        <div className="row g-4">
          <div className="col-12">
            <div className="inicio-section p-3">
              <h5 className="mb-3 d-flex align-items-center gap-2">
                <FaUniversity /> Información general </h5>
              <ul className="mb-0 inicio-list">
                <li><strong>Universidad:</strong> <span>Mariano Galvez De Guatemala</span></li>
                <li><strong>Curso:</strong> <span>Desarrollo Web</span> <FaBookOpen className="ms-2" /></li>
                <li><strong>Semestre / Ciclo:</strong> <span>Octavo</span></li>
                <li><strong>Sede:</strong> <span>Chiquimulilla,Santa Rosa</span></li>
              </ul>
            </div>
          </div>

          {/* Docente */}
          <div className="col-md-6">
            <div className="inicio-section p-3 h-100">
              <h5 className="mb-3 d-flex align-items-center gap-2">
                <FaUserTie /> Docente
              </h5>
              <ul className="mb-0 inicio-list">
                <li><strong>Nombre:</strong> <span>Ing. Carmelo Estuardo Mayen Monterroso </span></li>
                <li>
                  <strong>Correo:</strong>{" "}
                  <a href="mailto:correo.carmelo5mayen@gmail.com"><FaEnvelope className="me-1" />carmelo5mayen@gmail.com</a>
                </li>
                <li>
                  <strong>Contacto:</strong>{" "}
                  <a href="tel:+502 4206-6010"><FaPhone className="me-1" /> +502 4206-6010</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Alumno */}
          <div className="col-md-6">
            <div className="inicio-section p-3 h-100">
              <h5 className="mb-3 d-flex align-items-center gap-2">
                <FaIdBadge /> Alumno
              </h5>
              <ul className="mb-0 inicio-list">
                <li><strong>Nombre:</strong> <span>Brayan Josue Corado Robles</span></li>
                <li>
                  <strong>Correo:</strong>{" "}
                  <a href="mailto:brayancorado454@gmail.com"><FaEnvelope className="me-1" /> brayancorado454@gmail.com</a>
                </li>
                <li>
                  <strong>Contacto:</strong>{" "}
                  <a href="tel:+502 5156-2736"><FaPhone className="me-1" /> +502 5156-2736</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
  
  );
}

export default Inicio;
