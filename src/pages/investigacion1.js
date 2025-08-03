import { useState } from 'react';

function Investigacion1() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => setMostrar(!mostrar)}
      >
        Investigación: Formularios HTML y CSS {mostrar ? '▲' : '▼'}
      </button>

      {mostrar && (
        <div style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
          <h4>Introducción</h4>
          <p>
            En el desarrollo web moderno, la correcta estructuración de formularios y el diseño visual de los sitios son aspectos fundamentales para ofrecer una experiencia de usuario funcional y atractiva...
          </p>

          <h4>Formularios HTML y Fundamentos de CSS en Diseño Web</h4>
          <p>
            <strong>Elemento &lt;input&gt; y sus tipos comunes</strong><br />
            El elemento HTML &lt;input&gt; se utiliza para crear campos de entrada interactivos dentro de un formulario web...
          </p>

          <p>
            ... (⬅️ aquí puedes seguir pegando el resto del contenido dentro de más &lt;p&gt; o &lt;strong&gt; si deseas formatear secciones).
          </p>

          <h4>Conclusión</h4>
          <p>
            El dominio de los elementos fundamentales de HTML para formularios, junto con el conocimiento del uso de CSS y frameworks de estilo...
          </p>

          <h5>Referencias Bibliográficas</h5>
          <ul>
            <li>input - HTML: Lenguaje de etiquetas de hipertexto | MDN</li>
            <li>&lt;textarea&gt; - HTML: Lenguaje de etiquetas de hipertexto | MDN</li>
            <li>&lt;select&gt; - HTML: Lenguaje de etiquetas de hipertexto | MDN</li>
            <li>Framework de CSS - Wikipedia</li>
            <li>Uso de media queries - CSS | MDN</li>
            <li>https://www.seobility.net/es/wiki/Media_Query#</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Investigacion1;
