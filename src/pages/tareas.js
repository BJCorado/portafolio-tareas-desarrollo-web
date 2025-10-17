import Glosario from './glosario';
import Investigacion1 from './investigacion1';

function Tareas() {
  return (
    <div className="container main-content">
      <h2 className="mb-4 text-center glitch"
  data-text="TAREAS Y RECURSOS">TAREAS Y RECURSOS</h2>

      <Glosario />
      <Investigacion1 />
    </div>
  );
}

export default Tareas;
