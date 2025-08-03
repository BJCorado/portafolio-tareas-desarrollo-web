import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBook, FaCode,} from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

import Tareas from './pages/tareas';
import Projects from './pages/projects';

function App() {
  return (
    <Router>
      {/* Menú fijo y moderno */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand className="fw-bold fs-4 text-white d-flex align-items-center gap-2"> <FaBriefcase />Portafolio</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/tareas"><FaBook className="me-2" />Tareas y Recursos</Nav.Link>
              <Nav.Link as={Link} to="/proyectos"><FaCode className="me-2" />Proyectos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido de rutas */}
      <div className="container py-4">
        <h1 className="text-center mb-4">Portafolio de Tareas</h1>
        <Routes>
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/proyectos" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
