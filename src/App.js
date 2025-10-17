import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollSpy from "bootstrap/js/dist/scrollspy";
import React, { useEffect } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBook, FaCode, FaHome, FaBriefcase } from 'react-icons/fa';
import { useState } from 'react';
// Importar componentes de las páginas
import Tareas from './pages/tareas';
import Projects from './pages/projects';
import Acerca from './pages/inicio';
import GiscusComments from "./components/GiscusComments";
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Activa ScrollSpy sobre el body y apunta al contenedor con los <a.nav-link>
    const spy = new ScrollSpy(document.body, {
      target: "#navbar-nav",
      offset: 80,
    });
    return () => spy.dispose();
  }, []);

  // Estado para controlar el colapso
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app-wrapper">
      <Navbar className="floating-navbar" expand="lg" collapseOnSelect expanded={expanded}
        onToggle={() => setExpanded(!expanded)}>
        <Container>
          <Navbar.Brand className="fw-bold fs-4 text-white d-flex align-items-center gap-2">
            <FaBriefcase /> Portafolio De Tareas
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" onSelect={() => setExpanded(false)}>
              <Nav.Link href="#inicio">
                <FaHome className="me-2" /> Inicio
              </Nav.Link>
              <Nav.Link href="#tareas">
                <FaBook className="me-2" /> Tareas y Recursos
              </Nav.Link>
              <Nav.Link href="#proyectos">
                <FaCode className="me-2" /> Proyectos Web
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido (secciones) */}
      <main className="container py-4 main-content">
         <section id="inicio" className="mb-5">
          <Acerca />
        </section>
        <section id="tareas" className="mb-5">
          <Tareas />
        </section>
        <section id="proyectos" className="mb-5">
          <Projects />
        </section>
        <GiscusComments />
      </main>
        <Footer />
    </div>
  );
}

export default App;

