import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Tareas from './pages/tareas'; // antes era Glossary
import Projects from './pages/projects';

function App() {
  return (
    <Router>
      <div className="container py-4">
        <h1 className="text-center mb-4">Portafolio de Tareas</h1>

        {/* Menú de navegación */}
        <ul className="nav nav-pills mb-4 justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/tareas">Tareas y Recursos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/proyectos">Proyectos</Link>
          </li>
        </ul>

        {/* Rutas de las secciones */}
        <Routes>
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/proyectos" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;