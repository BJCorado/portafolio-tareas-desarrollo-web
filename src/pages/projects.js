import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <div className="container main-content">
      <h2 className="mb-4 text-center">Proyectos Web</h2>

      <div className="row">
        {/* Proyecto 1: API Marvel */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm project-card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Consumo de API de Marvel</h5>
              <p className="card-text flex-grow-1">
                Este proyecto muestra cómo consumir la API oficial de Marvel para obtener personajes, usando JavaScript y Axios.
              </p>
              <div>
                <a
                  href="https://github.com/BJCorado/proyecto-API"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark me-2"
                >
                  <FaGithub className="me-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto 2: Hoja de Vida */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm project-card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Sitio Web: Hoja de Vida Personal</h5>
              <p className="card-text flex-grow-1">
                Proyecto desarrollado con React, JavaScript y Bootstrap que presenta una hoja de vida profesional de forma organizada, moderna y responsiva. Contiene secciones como perfil, formación, experiencia, habilidades y contacto.
              </p>
              <div>
                <a
                  href="https://github.com/BJCorado/Mi-Hoja-De-Vida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark me-2"
                >
                  <FaGithub className="me-1" />
                  GitHub
                </a>
                <a
                  href="https://hvbjcorado.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  <FaExternalLinkAlt className="me-1" />
                  Ver Sitio Web
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Proyecto 3: Formulario con Excel */}
<div className="col-md-6 col-lg-4 mb-4">
  <div className="card shadow-sm project-card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">Formulario con Excel y Backend</h5>
      <p className="card-text flex-grow-1">
        Aplicación web que permite guardar información de un formulario en un archivo Excel (.xlsx), usando React para el frontend y Node.js con ExcelJS en el backend. Desplegado en Vercel y Render.
      </p>
      <div>
        <a
          href="https://github.com/BJCorado/formulario-excel"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark me-2"
        >
          <FaGithub className="me-1" /> GitHub
        </a>
        <a
          href="https://formulario-bj-corado.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          <FaExternalLinkAlt className="me-1" /> Ver Sitio Web
         </a>
         </div>
       </div>
      </div>
    </div>
     </div>
     </div>
  );
}

export default Projects;
