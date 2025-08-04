import { useState } from 'react';

function Investigacion1() {
  const [mostrar, setMostrar] = useState(false);


const textoPlano = `
\n**Introducción**\n
En el desarrollo web moderno, la correcta estructuración de formularios y el diseño visual de los sitios son aspectos fundamentales para ofrecer una experiencia de usuario funcional y atractiva. HTML proporciona una amplia variedad de elementos que permiten recolectar información del usuario de manera estructurada y efectiva, como los campos de entrada <input>, áreas de texto <textarea>, y listas desplegables <select>. Sin embargo, para lograr una presentación visual adecuada y adaptativa, es necesario complementar la estructura HTML con hojas de estilo CSS, frameworks de diseño y técnicas como las media queries. Este informe tiene como objetivo describir los principales elementos utilizados en formularios HTML, así como explicar el rol de CSS, los beneficios del uso de frameworks de estilo y la importancia de las media queries en la creación de sitios web responsivos.




\n**Formularios HTML y Fundamentos de CSS en Diseño Web**\n
Elemento <input> y sus tipos comunes
El elemento HTML <input> se utiliza para crear campos de entrada interactivos dentro de un formulario web. Este elemento soporta diversos tipos (atributo type) que determinan el widget o control que se mostrará para la entrada de datos del usuario. A continuación se describen los tipos más comunes de <input> y su uso:
•	type="text": Campo de texto de una sola línea para ingresar datos generales (letras, números, etc.).
 Ejemplo: <input type="text" name="usuario" placeholder="Nombre de usuario">.

•	type="password": Igual que el tipo text, pero el texto introducido se oculta (por motivos de seguridad, mostrando asteriscos u otros caracteres). 
Ejemplo: <input type="password" name="clave">.

•	type="email": Campo de texto optimizado para ingresar una dirección de correo electrónico. Los navegadores suelen validar que el formato del texto corresponda a un email válido antes de enviar el formulario. 
Ejemplo: <input type="email" name="correo" required> (este campo requerirá un email con formato correcto, e.g. usuario@dominio.com).

•	type="number": Muestra un control numérico (con flechas incrementales en interfaces gráficas) para introducir un número. Solo admite dígitos (y algunos símbolos como +/-) y puede tener restricciones adicionales mediante atributos como min, max o step.
 Ejemplo: <input type="number" name="edad" min="0" max="120">.

•	type="radio": Crea un botón de opción (radio button) que permite seleccionar una opción dentro de un conjunto. Varios radios comparten el mismo atributo name para formar un grupo donde solo uno puede estar seleccionado a la vez. Se utiliza el atributo checked para marcar por defecto una opción. 
Ejemplo: <input type="radio" name="genero" value="M" checked> Masculino  
<input type="radio" name="genero" value="F"> Femenino




•	type="checkbox": Genera una casilla de verificación que puede marcarse (valor true) o desmarcarse (false). A diferencia de los radio, se pueden marcar múltiples checkboxes independientes. El atributo checked indica si la casilla aparece marcada inicialmente. 
Ejemplo: <input type="checkbox" name="acepto_terminos" checked> Acepto los términos y condiciones.

•	type="file": Proporciona un control para seleccionar archivos del dispositivo del usuario. Al hacer clic, abre el explorador de archivos. Se puede limitar el tipo de archivos aceptados mediante el atributo accept (por ejemplo, accept="image/png, image/jpeg" para solo imágenes).
 Ejemplo: <input type="file" name="foto" accept="image/*">.

•	type="hidden": Campo oculto que no se muestra en la página, pero su valor se envía junto con el formulario. Se usa para incluir datos que el usuario no modifica manualmente (por ejemplo, un token, ID, referencia, etc.). 
Ejemplo: <input type="hidden" name="session_id" value="abc123">.

•	type="submit": Botón para enviar (enviar los datos) el formulario. Al hacer clic, se realiza el submit del formulario contenedor, enviando todos los campos al servidor.
 Ejemplo: <input type="submit" value="Enviar">.

•	type="reset": Botón que restaura todos los campos del formulario a sus valores iniciales o por defecto.
 Ejemplo: <input type="reset" value="Restablecer">.

•	type="button": Botón genérico sin comportamiento predeterminado. Sirve para acciones personalizadas (generalmente manejadas con JavaScript). 
Ejemplo: <input type="button" value="Haz clic" onclick="alert('¡Hola!')">.

•	type="color": Muestra un selector de color para permitir elegir un valor de color (generalmente presenta una pequeña paleta o diálogo de color). El valor resultante es un código de color hexadecimal (por ejemplo, #ff0000 para rojo). 
Ejemplo: <input type="color" name="favorito_color" value="#ff0000">.


•	type="date": Proporciona un control para seleccionar una fecha (año, mes y día). En navegadores modernos suele mostrarse un calendario emergente para elegir la fecha.
 Ejemplo: <input type="date" name="fecha_nacimiento">.

•	type="time": Campo para ingresar una hora (hora y minutos, opcionalmente segundos). Muestra un selector de hora en navegadores que lo soportan.
 Ejemplo: <input type="time" name="hora_evento">.

•	type="range": Muestra un control de rango (una barra deslizante) para seleccionar un número dentro de un intervalo. Es útil para elegir valores aproximados (por ejemplo, volumen, brillo). Por defecto el rango va de 0 a 100. Se puede ajustar con atributos min, max y step. 
Ejemplo: <input type="range" name="nivel" min="1" max="10" step="1">.

•	type="tel": Campo de texto para ingresar un número de teléfono. No aplica un formato o validación automática estricta (más allá de prohibir saltos de línea), pero en móviles suele activar un teclado numérico para facilitar la introducción.
 Ejemplo: <input type="tel" name="telefono" placeholder="(123) 456-7890">.

•	type="url": Campo de texto para ingresar una URL (dirección web). El navegador valida que tenga formato de URL (por ejemplo, que inicie con http:// o https://) antes de permitir el envío.
 Ejemplo: <input type="url" name="sitio_web" placeholder="https://ejemplo.com">.

•	type="search": Similar al campo de texto normal, pero semánticamente indicado para búsquedas. Algunos navegadores podrían estilizarlo ligeramente o agregar un botón para limpiar el texto. 
Ejemplo: <input type="search" name="consulta" placeholder="Buscar...">.


Elemento <textarea>
El elemento <textarea> de HTML representa un campo de texto de múltiples líneas para la edición de texto libre. A diferencia de <input type="text"> (que es de una sola línea), un <textarea> permite al usuario introducir párrafos o grandes bloques de texto, por ejemplo para mensajes, comentarios o descripciones.

Un <textarea> no es un elemento vacío, por lo que requiere etiqueta de apertura y cierre. El contenido entre las etiquetas aparece como texto inicial en el campo (y puede ser editado por el usuario). Alternativamente, se puede usar el atributo placeholder para mostrar un texto indicativo mientras el campo esté vacío.

Ejemplo básico de uso: un cuadro de texto multilínea para comentarios:

<form>
  <label for="comentarios">Comentarios:</label><br>
  <textarea id="comentarios" name="comentarios" rows="5" cols="40" placeholder="Escribe tus comentarios..."></textarea>
</form>


En este ejemplo, rows="5" y cols="40" especifican el tamaño visible inicial (5 filas de alto y 40 columnas de ancho aproximado). Estos atributos definen dimensiones en términos de caracteres promedio. Sin embargo, es común controlar el tamaño mediante CSS (propiedades de ancho y alto) en lugar de rows y cols. Al cargar la página, el <textarea> mostrará un área de texto de 5 líneas de alto, con el placeholder "Escribe tus comentarios..." que desaparecerá cuando el usuario empiece a escribir.


Elemento <select>
El elemento HTML <select> crea un menú desplegable (lista de opciones) dentro de un formulario. Por defecto, <select> permite elegir una de las opciones definidas en su interior mediante elementos <option>. Cada <option> representa una opción del menú, definida con un valor (value) que se enviará al servidor si esa opción es seleccionada, y un contenido textual que es lo que ve el usuario en la lista.

La estructura básica de un <select> es la siguiente:

<label for="pais">Elige un país:</label>
<select id="pais" name="pais">
  <option value="gt">Guatemala</option>
  <option value="mx" selected>México</option>
  <option value="es">España</option>
</select>

En el ejemplo anterior, el menú desplegable permite elegir un país. La opción "México" está marcada con selected, por lo que aparecerá seleccionada por defecto al cargar la página. El atributo name="pais" en el <select> asegura que, al enviarse el formulario, el valor de la opción elegida (por ejemplo "mx") se asociará al campo "pais".

Dentro de un <select> también se puede usar <optgroup> para agrupar opciones bajo una etiqueta común (útil para listas largas categorizadas), pero su uso es opcional. Asimismo, si se añade el atributo booleano multiple al <select>, el control permitirá seleccionar múltiples opciones a la vez (generalmente mostrando la lista en forma de cuadro con scroll). Cuando multiple está presente, el usuario puede hacer Ctrl+clic (o equivalente táctil) para seleccionar varias opciones.




\n**¿Qué es CSS y para qué sirve?**\n
CSS, siglas de Cascading Style Sheets (en español: Hojas de Estilo en Cascada), es el lenguaje utilizado para describir y controlar la presentación visual de los documentos HTML en la web. En esencia, HTML define la estructura y el contenido (qué elementos aparecen en la página), mientras que CSS define cómo se ven esos elementos: colores, tipografías, tamaños, posicionamiento, márgenes, etc.
La función principal de CSS en el diseño web es separar la presentación del contenido, lo que aporta flexibilidad y facilidad de mantenimiento. Gracias a CSS, podemos aplicar estilos consistentes a múltiples páginas y adaptarlos rápidamente, sin tener que incrustar atributos de estilo en el propio HTML. Por ejemplo, con una sola hoja de estilo CSS se puede cambiar el aspecto de todo un sitio web (colores corporativos, fuentes, diseño de layout) de forma centralizada.
Algunas características clave de CSS:

•	Selector y reglas: CSS funciona mediante reglas que se aplican a uno o más elementos HTML seleccionados por tipos, clases, IDs u otros selectores. Cada regla tiene propiedades y valores. Por ejemplo, una regla CSS puede definir que todos los <h1> tengan color azul y tamaño de letra 2em.

•	Cascada y especificidad: El término "en cascada" indica que cuando múltiples reglas afectan a un elemento, la prioridad se decide según la especificidad del selector y el orden en que aparezcan (última regla aplicada puede sobrescribir a anteriores si tienen igual especificidad). Esto permite heredar estilos generales y solo sobrescribir detalles cuando sea necesario.


•	Responsividad y media queries: CSS permite adaptar el diseño a diferentes dispositivos (computadoras de escritorio, tablets, móviles) a través de media queries (consultas de medios), lo que facilita crear diseños responsivos.





\n**Frameworks de estilo CSS**\n
Los frameworks de CSS son bibliotecas de estilos predefinidos que facilitan y agilizan el desarrollo de interfaces web. En lugar de escribir todo el CSS desde cero, un framework proporciona una base de código ya diseñada y probada –incluyendo sistemas de cuadrícula (grid), estilos para botones, formularios, navegación, tipografías y otros componentes de interfaz– que podemos reutilizar en nuestros proyectos. De esta manera, aportan una estructura y conjuntos de utilidades comunes que permiten implementar diseños web de forma más rápida y consistente.

Al usar un framework CSS, un desarrollador puede aplicar clases predefinidas a sus elementos HTML para obtener diseños responsivos y profesionales sin profundizar en los detalles de estilos bajos nivel. Por ejemplo, muchos frameworks proveen clases para crear layouts de columnas que se adaptan según el tamaño de pantalla, estilos atractivos para tablas y formularios, etc., ahorrando tiempo y asegurando buenas prácticas de diseño.

\n**Ejemplos de frameworks CSS populares:**\n
•	Bootstrap: Uno de los frameworks más utilizados, originalmente creado por Twitter. Ofrece un amplio conjunto de componentes UI (como barras de navegación, modales, tooltips) y un sistema de rejilla responsiva fácil de usar. Es conocido por facilitar el diseño mobile-first (prioriza móviles) y por su gran comunidad y documentación.
•	Tailwind CSS: Un framework CSS moderno de tipo utility-first, que proporciona clases utilitarias de bajo nivel (ej. flex, pt-4, text-center) para construir diseños directamente en el HTML. A diferencia de Bootstrap, Tailwind no incluye componentes prediseñados, sino que sirve como una "caja de herramientas" de estilos altamente configurable.
•	Foundation: Otro framework ampliamente utilizado, enfocado en accesibilidad y flexibilidad. Proporciona también grid responsivo y componentes predefinidos, similar en alcance a Bootstrap.
•	Bulma: Framework moderno 100% CSS (sin JavaScript), con enfoque en simplicidad. Ofrece clases semánticas fáciles de entender para diseño responsivo y componentes básicos.
•	Materialize, Semantic UI, UIKit, entre otros: existen muchos más frameworks; cada uno con su filosofía y set de componentes, pero todos comparten la idea de ofrecer un punto de partida estándar para los estilos CSS.
Todos estos frameworks ayudan a acelerar el proceso de diseño y a asegurar uniformidad en la apariencia del sitio. Es importante destacar que no son obligatorios: para proyectos pequeños o estilos muy personalizados, a veces es preferible escribir CSS propio. Sin embargo, en proyectos grandes o cuando se busca prototipar rápidamente, los frameworks CSS pueden ser de gran ayuda al proveer soluciones ya hechas a problemas comunes de diseño.


\n**Media queries (consultas de medios) en CSS**\n
Las media queries son reglas de CSS que permiten aplicar estilos de forma condicional según el medio o las características del dispositivo donde se visualiza la página. En otras palabras, podemos definir segmentos de CSS que solo surtirán efecto si se cumple cierta condición, como por ejemplo "si el ancho de la pantalla es menor a 600px" o "si la página se imprime en papel". Esto es fundamental para el diseño web responsivo, ya que posibilita adaptar la presentación a distintos tamaños de pantalla y tipos de dispositivos.
Una media query se define usando la regla @media. La sintaxis básica es:

@media (<condición>) {
  /* Estilos CSS que se aplican solo si se cumple la condición */
}


Las condiciones comunes incluyen:

•	Ancho/alto de pantalla (width/height): Por ejemplo, max-width: 800px (cuando el dispositivo o ventana tiene como mucho 800px de ancho) o min-width: 1200px (cuando tiene al menos 1200px de ancho).

•	Orientación (orientation): Permite distinguir entre modo vertical (portrait) u horizontal (landscape) de un dispositivo móvil o tableta.

•	Tipo de medio: Usando clasificadores como screen (pantalla), print (impresión), speech (lectores de pantalla de voz), etc., podemos aplicar estilos específicos a cada entorno. Por ejemplo, @media print { ... } ajusta estilos al imprimir.

•	Resolución (resolution): Para targets con cierta densidad de píxeles (dpi), útil al manejar imágenes de alta resolución para pantallas retina, etc.





Ejemplo práctico: Supongamos que queremos cambiar el diseño de una página cuando se ve en dispositivos móviles (pantallas pequeñas). Podemos usar una media query con max-width para aplicar estilos especiales en ese caso:

/* Estilos generales para dispositivos grandes/por defecto */
.container {
  width: 800px;
  margin: 0 auto;
}

/* Media query: estilos para pantallas de ancho 600px o menos (móviles) */
@media screen and (max-width: 600px) {
  .container {
    width: 100%;       /* Ocupa todo el ancho en móvil */
    margin: 0 10px;    /* Pequeños márgenes laterales en lugar de auto */
  }
  nav.menu {
    display: none;     /* Ocultar el menú de navegación en pantallas pequeñas */
  }
}

En el código anterior, los estilos dentro de @media screen and (max-width: 600px) { ... } solo se aplicarán si el dispositivo tiene un ancho de pantalla de 600 píxeles o menos. Esto típicamente corresponde a smartphones en orientación vertical. Concretamente, la regla hace que el contenedor .container pase de un ancho fijo (800px) a un ancho del 100% (adaptándose al ancho reducido del móvil), y oculta el menú de navegación (nav.menu) en pantallas pequeñas para simplificar la interfaz. Si la pantalla es más grande de 600px, estos estilos no se aplican (el contenedor sigue con 800px centrado y el menú visible, adecuado para escritorio).

Las media queries permiten definir múltiples "puntos de quiebre" (breakpoints) en el CSS. Es común, por ejemplo, tener un diseño de tres columnas en escritorio, que cambia a dos columnas en tablets y a una columna en móviles. Esto se logra escribiendo media queries para los anchos aproximados de tablet y móvil, ajustando allí los estilos de layout. Gracias a esta técnica, el sitio web puede ser responsive, adaptándose gradualmente a las dimensiones de cada dispositivo para mejorar la experiencia de usuario


\n**Conclusión**\n
El dominio de los elementos fundamentales de HTML para formularios, junto con el conocimiento del uso de CSS y frameworks de estilo, permite a los desarrolladores construir interfaces web intuitivas, accesibles y visualmente atractivas. Los formularios bien estructurados facilitan la recolección de datos, mientras que los estilos CSS y los frameworks agilizan la personalización y la consistencia del diseño. Además, las media queries representan una herramienta clave para asegurar que el diseño se adapte correctamente a distintos dispositivos y resoluciones de pantalla. En conjunto, estos conocimientos forman la base para el desarrollo de sitios web modernos y responsivos que respondan a las necesidades de los usuarios y estándares actuales de la web.

`;

  // Primero se escapan los signos para que no se rendericen como campos reales
  const textoEscapado = textoPlano
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
 // Luego se aplica el formato de negrita a los títulos con asteriscos
const textoConNegrita = textoEscapado.replace(/\n\*\*(.*?)\*\*\n/g, '<p><strong>$1</strong></p>')

  return (
    <div className="mb-4">
      <button
        className="custom-toggle-btn mb-3"
        onClick={() => setMostrar(!mostrar)}
      >
        Investigación: Formularios HTML y CSS {mostrar ? '▲' : '▼'}
      </button>

      {mostrar && (
        <div
          className="investigacion-texto"
          dangerouslySetInnerHTML={{ __html: textoConNegrita }}
        />
      )}
    </div>
  );
}

export default Investigacion1;
