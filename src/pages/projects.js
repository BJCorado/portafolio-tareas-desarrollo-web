import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiBootstrap, SiAxios, SiVercel } from 'react-icons/si';

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
                Este proyecto muestra cómo consumir la API alternativa(super hero) de Marvel para obtener personajes, usando JavaScript y Axios.
              </p>
              <div className="tech-icons mb-3">
             <FaHtml5 title="Html5" size={24} color="#e34c26" className="me-2" />
             <FaCss3Alt title="Css3" size={24} color="#264de4" className="me-2" />
             <SiJavascript title="JavaScript" size={24} style={{ color: '#F7DF1E' }} className="me-2" />
            <SiAxios title="Axios" size={24} style={{ color: '#5A29E4' }} className="me-2" />
             </div>
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
              <div className="tech-icons mb-3">
              <FaHtml5 title="Html5" size={24} color="#e34c26" className="me-2" />
              <FaCss3Alt title="Css3" size={24} color="#264de4" className="me-2" />
              <FaReact title="React" size={24} style={{ color: '#61DAFB' }} className="me-2" />
              <SiJavascript title="JavaScript" size={24} style={{ color: '#F7DF1E' }} className="me-2" />
              <SiBootstrap title="Bootstrap" size={24} style={{ color: '#7952B3' }} className="me-2" />
              <SiVercel title="Vercel" size={24} style={{ color: '#000000' }} className="me-2" />
               </div>
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
      <div className="tech-icons mb-3">
        <FaReact title="React" size={24} style={{ color: '#61DAFB' }} className="me-2" />
        <FaNodeJs title="Node.js" size={24} style={{ color: '#339933' }} className="me-2" />
       <SiJavascript title="JavaScript" size={24} style={{ color: '#F7DF1E' }} className="me-2" />
       <SiBootstrap title="Bootstrap" size={24} style={{ color: '#7952B3' }} className="me-2" />
       <SiVercel title="Vercel" size={24} style={{ color: '#000000' }} className="me-2" />
     </div>
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
