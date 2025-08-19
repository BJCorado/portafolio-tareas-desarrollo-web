import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBook, FaCode, FaInfoCircle} from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

import Tareas from './pages/tareas';
import Projects from './pages/projects';
import Acerca from './pages/acerca';


function App() {
  return (
     <div className="app-wrapper"> {/*CONTENEDOR QUE ENVUELVE TODO */}
    <Router>
      {/* Menú fijo y moderno */}
<Navbar className="floating-navbar" expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand className="fw-bold fs-4 text-white d-flex align-items-center gap-2">
      <FaBriefcase /> Portafolio De Tareas
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
     <Nav.Link as={NavLink} to="/tareas" eventKey="tareas">
  <FaBook className="me-2" /> Tareas y Recursos
</Nav.Link>

<Nav.Link as={NavLink} to="/proyectos" eventKey="proyectos">
  <FaCode className="me-2" /> Proyectos Web
</Nav.Link>

<Nav.Link as={NavLink} to="/acerca" eventKey="acerca">
  <FaInfoCircle className="me-2" /> Acerca de
</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>

      {/* Contenido de rutas */}
      <div className="container py-4 main-content">
        <Routes>
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/" element={<Navigate to="/tareas" replace />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
