function Projects() {
  return (
    <div className="container">
      <h2 className="mb-4">Proyectos Web</h2>

      {/* Proyecto 1: API Marvel */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Consumo de API de Marvel</h5>
          <p className="card-text">
            Este proyecto muestra cómo consumir la API oficial de Marvel para obtener personajes, usando JavaScript y Axios.
          </p>
          <a
            href="https://github.com/BJCorado/proyecto-API"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark me-2"
          >
            Ver en GitHub
          </a>
        </div>
      </div>

      {/* Proyecto 2: Hoja de Vida */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Sitio Web: Hoja de Vida Personal</h5>
          <p className="card-text">
            Proyecto desarrollado con React, JavaScript y Bootstrap que presenta una hoja de vida profesional de forma organizada, moderna y responsiva. Contiene secciones como perfil, formación, experiencia, habilidades y contacto.
          </p>
          <a
            href="https://github.com/BJCorado/Mi-Hoja-De-Vida"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark me-2"
          >
            Ver en GitHub
          </a>
          <a
            href="https://hvbjcorado.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Ver Sitio Web
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
