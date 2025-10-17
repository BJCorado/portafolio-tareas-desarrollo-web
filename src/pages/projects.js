import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,FaDocker,FaDatabase,FaHome } from 'react-icons/fa';
import { SiJavascript, SiBootstrap, SiAxios, SiVercel, SiTypescript, SiVite, SiSwagger, SiJsonwebtokens
  ,SiExpress,SiTailwindcss, SiReactrouter,SiGoogledrive,SiFreecodecamp,SiSass,SiRedux,SiJquery   } from 'react-icons/si';

function Projects() {
  return (
    <div className="container main-content">
      <h2 className="mb-4 text-center glitch"
  data-text="Proyectos Web">Proyectos Web</h2>

      <div className="row">
        {/* Proyecto 1: API Marvel */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm project-card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Consumo de API</h5>
              <div className="project-img-container">
               <img src="/marvel.png" alt="Marvel API"className="project-img"/>
              </div>
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
              <h5 className="card-title">Hoja de Vida Personal</h5>
              <div className="project-img-container">
               <img src="/hoja de vida.png" alt="Hoja de vida"className="project-img"/>
              </div>
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
      <div className="project-img-container">
               <img src="/formulario.png" alt="Formulario"className="project-img"/>
              </div>
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
            {/* Proyecto 4: web responsiva */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm project-card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Web Responsiva</h5>
              <div className="project-img-container">
               <img src="/web responsiva.png" alt="Web Responsiva"className="project-img"/>
              </div>
              <p className="card-text flex-grow-1">
              Esta web demuestra un diseño adaptable en móvil, tableta y escritorio utilizando utilidades responsivas de Bootstrap y media queries personalizadas.
              </p>
              <div className="tech-icons mb-3">
              <FaHtml5 title="Html5" size={24} color="#e34c26" className="me-2" />
              <FaCss3Alt title="Css3" size={24} color="#264de4" className="me-2" />
              <FaReact title="React" size={24} style={{ color: '#61DAFB' }} className="me-2" />
              <SiTypescript title="TypeScript" size={24} style={{ color: '#3178c6' }} className="me-2" />
              <SiBootstrap title="Bootstrap" size={24} style={{ color: '#7952B3' }} className="me-2" />
              <SiVite title="Vite" size={24} style={{ color: '#646CFF' }} className="me-2" />
              <SiVercel title="Vercel" size={24} style={{ color: '#000000' }} className="me-2" />
               </div>
              <div>
                <a
                  href="https://github.com/BJCorado/Web-Responsiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark me-2"
                >
                  <FaGithub className="me-1" />
                  GitHub
                </a>
                <a
                  href="https://web-responsiva-olive.vercel.app/"
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
        {/* Proyecto 5: API Gestión de Expedientes e Indicios */}
<div className="col-md-6 col-lg-4 mb-4">
  <div className="card shadow-sm project-card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">API Gestión de Expedientes e Indicios</h5>

      <div className="project-img-container">
        <img 
          src="/apigestionexpedientes.png" 
          alt="API Gestión de Expedientes e Indicios" 
          className="project-img" 
        />
      </div>

      <p className="card-text flex-grow-1">
        API RESTful desarrollada con Node.js y Express (TypeScript) para la gestión de expedientes e indicios. 
        Implementa autenticación JWT, middlewares de rol, procedimientos almacenados en SQL Server para CRUD, 
        y documentación interactiva con Swagger. Desplegada mediante contenedores Docker y Docker Compose.
      </p>

      <div className="tech-icons mb-3">
        <FaNodeJs title="Node.js" size={24} style={{ color: '#68A063' }} className="me-2" />
        <SiExpress title="Express.js" size={24} style={{ color: '#000000' }} className="me-2" />
        <SiTypescript title="TypeScript" size={24} style={{ color: '#3178C6' }} className="me-2" />
        <SiJsonwebtokens title="JWT (JSON Web Token)" size={24} style={{ color: '#D63AFF' }} className="me-2" />
        <FaDatabase title="SQL Server" size={24} style={{ color: '#CC2927' }} className="me-2" />
        <SiSwagger title="Swagger" size={24} style={{ color: '#85EA2D' }} className="me-2" />
        <FaDocker title="Docker" size={24} style={{ color: '#2496ED' }} className="me-2" />
      </div>

      <div>
        <a
          href="https://github.com/BJCorado/API_Gestion_de_Expedientes_e_Indicios"
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
{/* Proyecto 6: Gestor de Expedientes e Indicios — Frontend */}
<div className="col-md-6 col-lg-4 mb-4">
  <div className="card shadow-sm project-card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">Gestor de Expedientes e Indicios — Frontend</h5>

      <div className="project-img-container">
        <img 
          src="/frontendexpedientes.jpeg" 
          alt="Gestor de Expedientes e Indicios Frontend" 
          className="project-img" 
        />
      </div>

      <p className="card-text flex-grow-1">
        SPA desarrollada con React, Vite y TypeScript para la gestión de expedientes e indicios. 
        Implementa autenticación JWT, control de acceso por roles (técnico | coordinador), 
        operaciones CRUD, y una experiencia fluida con diseño oscuro y animaciones de entrada. 
        Se conecta a la API REST para manejar datos de usuarios, expedientes e indicios.
      </p>

      <div className="tech-icons mb-3">
        <FaReact title="React" size={24} style={{ color: '#61DAFB' }} className="me-2" />
        <SiVite title="Vite" size={24} style={{ color: '#FFD62E' }} className="me-2" />
        <SiTypescript title="TypeScript" size={24} style={{ color: '#3178C6' }} className="me-2" />
        <SiTailwindcss title="Tailwind CSS" size={24} style={{ color: '#38BDF8' }} className="me-2" />
        <SiAxios title="Axios" size={24} style={{ color: '#5A29E4' }} className="me-2" />
        <SiReactrouter title="React Router" size={24} style={{ color: '#CA4245' }} className="me-2" />
        <FaDocker title="Docker" size={24} style={{ color: '#2496ED' }} className="me-2" />
      </div>

      <div>
        <a
          href="https://github.com/BJCorado/FRONTEND_Gestion_de_Expedientes_e_Indicios"
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
{/* Proyecto 7: Integración Backend y Frontend */}
<div className="col-md-6 col-lg-4 mb-4">
  <div className="card shadow-sm project-card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">Video Integración Backend y Frontend — API + SPA</h5>

      <div className="project-img-container">
        <img 
          src="/videointegracion.png" 
          alt="Integración Backend y Frontend" 
          className="project-img" 
        />
      </div>

      <p className="card-text flex-grow-1">
        Demostración completa de la integración entre el <strong>backend</strong> (Node.js, Express, SQL Server, JWT)
        y el <strong>frontend</strong> (React, Vite, TypeScript, Tailwind CSS). 
        Ambos entornos se ejecutan en contenedores Docker, conectados mediante variables de entorno.
        Se muestran operaciones CRUD reales con autenticación por roles (técnico | coordinador) 
        y comunicación directa con la base de datos.
      </p>

      <div className="tech-icons mb-3">
        <FaNodeJs title="Node.js" size={24} style={{ color: '#68A063' }} className="me-2" />
        <SiExpress title="Express.js" size={24} style={{ color: '#000000' }} className="me-2" />
        <SiTypescript title="TypeScript" size={24} style={{ color: '#3178C6' }} className="me-2" />
        <FaReact title="React" size={24} style={{ color: '#61DAFB' }} className="me-2" />
        <SiTailwindcss title="Tailwind CSS" size={24} style={{ color: '#38BDF8' }} className="me-2" />
        <FaDocker title="Docker" size={24} style={{ color: '#2496ED' }} className="me-2" />
        <FaDatabase title="SQL Server" size={24} style={{ color: '#CC2927' }} className="me-2" />
        <SiJsonwebtokens title="JWT" size={24} style={{ color: '#D63AFF' }} className="me-2" />
      </div>

      <div>
        <a
          href="https://drive.google.com/file/d/1vp1fLv1f3V8XJXZ2uno9J1Emw_nmzRq6/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          <SiGoogledrive size={18} className="me-2" />
          Ver Video de Demostración
        </a>
      </div>
    </div>
  </div>
</div>
{/* Proyecto 8: Certificación — Front End Development Libraries (freeCodeCamp) */}
<div className="col-md-6 col-lg-4 mb-4">
  <div className="card shadow-sm project-card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">Certificación — Front End Development Libraries</h5>

      <div className="project-img-container">
        <img 
          src="/certificado.jpeg" 
          alt="freeCodeCamp Front End Development Libraries" 
          className="project-img" 
        />
      </div>

      <p className="card-text flex-grow-1">
        Certificación de <strong>freeCodeCamp</strong> centrada en librerías de desarrollo frontend. 
        Abarca <strong>React</strong>, <strong>Redux</strong>, <strong>Bootstrap</strong>, <strong>jQuery</strong> y <strong>SASS</strong>, 
        con ejercicios y proyectos prácticos que validan el manejo de componentes, estado global, estilos y 
        creación de interfaces responsivas.
      </p>

      <div className="tech-icons mb-3">
        <FaReact title="React" size={24} style={{ color: '#61DAFB' }} className="me-2" />
        <SiRedux title="Redux" size={24} style={{ color: '#764ABC' }} className="me-2" />
        <SiBootstrap title="Bootstrap" size={24} style={{ color: '#7952B3' }} className="me-2" />
        <SiJquery title="jQuery" size={24} style={{ color: '#0769AD' }} className="me-2" />
        <SiSass title="SASS" size={24} style={{ color: '#CC6699' }} className="me-2" />
        <SiFreecodecamp title="freeCodeCamp" size={24} style={{ color: '#0A0A23' }} className="me-2" />
      </div>

      <div>
        <a
          href="https://www.freecodecamp.org/certification/fcc-00d42891-0988-464b-99f3-b494ac9eda8f/front-end-development-libraries"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary d-inline-flex align-items-center"
        >
          <SiFreecodecamp size={18} className="me-2" />
          Ver Certificado
        </a>
      </div>
    </div>
  </div>
</div>
{/* Proyecto 9: Portafolio de Tareas (este sitio) */}
<div className="col-md-6 col-lg-4 mb-4">
  <div className="card shadow-sm project-card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">Portafolio de Tareas — Sitio Actual</h5>

      <div className="project-img-container">
        <img 
          src="/portafolio_tareas.png" 
          alt="Portafolio de Tareas - Sitio Actual" 
          className="project-img" 
        />
      </div>

      <p className="card-text flex-grow-1">
        Portafolio creado con React y JavaScript para presentar tareas y proyectos, con estilo glassmorphism,
        animaciones en las cards y sección de comentarios integrada con Giscus.Maquetación con Bootstrap/CSS puro. Desplegado en Vercel.
      </p>

      <div className="tech-icons mb-3">
        <FaReact title="React" size={24} style={{ color: '#61DAFB' }} className="me-2" />
        <SiJavascript title="JavaScript" size={24} style={{ color: '#F7DF1E' }} className="me-2" />
        <FaHtml5 title="HTML5" size={24} color="#e34c26" className="me-2" />
        <FaCss3Alt title="CSS3" size={24} color="#264de4" className="me-2" />
        <SiBootstrap title="Bootstrap" size={24} style={{ color: '#7952B3' }} className="me-2" />
        <SiReactrouter title="React Router" size={24} style={{ color: '#CA4245' }} className="me-2" />
        <SiVercel title="Vercel" size={24} style={{ color: '#000000' }} className="me-2" />
      </div>

      <div>
        <a
          href="https://github.com/BJCorado/portafolio-tareas-desarrollo-web"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark me-2"
        >
          <FaGithub className="me-1" />
          GitHub
        </a>

        {/* Botón informativo: ya estás en el sitio */}
        <button
          type="button"
          className="btn btn-outline-primary"
          disabled
          aria-disabled="true"
          title="Ya estás navegando este sitio"
        >
          <FaHome className="me-1" />
          Estás viendo este sitio
        </button>
      </div>
    </div>
  </div>
</div>


     </div>
     </div>
  );
}

export default Projects;
