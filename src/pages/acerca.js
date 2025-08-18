// src/pages/acerca.js
import { FaUniversity, FaUserTie, FaEnvelope, FaPhone, FaBookOpen, FaIdBadge } from "react-icons/fa";

function Acerca() {
  return (
    <div className="container main-content">
      <div className="acerca-card mx-auto">
        {/* Encabezado con logo y título */}
        <div className="text-center mb-4">
          <img
            src="/logo.png" alt="Logo de la Universidad Mariano Gálvez"className="acerca-logo mb-3" />
          <h2 className="mb-2">Acerca de este Portafolio</h2>
          <p className="mb-0">
            Este portafolio reúne tareas, investigaciones y proyectos desarrollados durante el curso.
          </p>
        </div>

        {/* Datos generales */}
        <div className="row g-4">
          <div className="col-12">
            <div className="acerca-section p-3">
              <h5 className="mb-3 d-flex align-items-center gap-2">
                <FaUniversity /> Información general </h5>
              <ul className="mb-0 acerca-list">
                <li><strong>Universidad:</strong> <span>Mariano Galvez De Guatemala</span></li>
                <li><strong>Curso:</strong> <span>Desarrollo Web</span> <FaBookOpen className="ms-2" /></li>
                <li><strong>Semestre / Ciclo:</strong> <span>Octavo</span></li>
                <li><strong>Sede:</strong> <span>Chiquimulilla,Santa Rosa</span></li>
              </ul>
            </div>
          </div>

          {/* Docente */}
          <div className="col-md-6">
            <div className="acerca-section p-3 h-100">
              <h5 className="mb-3 d-flex align-items-center gap-2">
                <FaUserTie /> Docente
              </h5>
              <ul className="mb-0 acerca-list">
                <li><strong>Nombre:</strong> <span>Ing. Carmelo Estuardo Mayen Monterroso </span></li>
                <li>
                  <strong>Correo:</strong>{" "}
                  <a href="mailto:correo.ing@universidad.edu"><FaEnvelope className="me-1" /> correo.ing@universidad.edu</a>
                </li>
                <li>
                  <strong>Contacto:</strong>{" "}
                  <a href="tel:+50200000000"><FaPhone className="me-1" /> +502 0000 0000</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Alumno */}
          <div className="col-md-6">
            <div className="acerca-section p-3 h-100">
              <h5 className="mb-3 d-flex align-items-center gap-2">
                <FaIdBadge /> Alumno
              </h5>
              <ul className="mb-0 acerca-list">
                <li><strong>Nombre:</strong> <span>Brayan Josue Corado Robles</span></li>
                <li>
                  <strong>Correo:</strong>{" "}
                  <a href="mailto:tucorreo@dominio.com"><FaEnvelope className="me-1" /> tucorreo@dominio.com</a>
                </li>
                <li>
                  <strong>Contacto:</strong>{" "}
                  <a href="tel:+50200000000"><FaPhone className="me-1" /> +502 0000 0000</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Acerca;
