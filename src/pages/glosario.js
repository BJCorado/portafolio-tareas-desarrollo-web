import { useState } from 'react';

function Glossary() {
  const [showGlossary, setShowGlossary] = useState(false);

  const glossaryItems = [
    { term: "3G / 4G", definition: "Tercera / Cuarta Generación de redes móviles. Generaciones sucesivas de tecnologías móviles, cada una con mayores velocidades y capacidades." },
    { term: "ADSL", definition: "Asymmetric Digital Subscriber Line. Tecnología de acceso a internet de banda ancha a través de líneas telefónicas." },
    { term: "AJAX", definition: "Asynchronous JavaScript and XML. Técnica para actualizar partes de una página web sin recargarla completamente." },
    { term: "AMF", definition: "Action Message Format. Formato binario para serializar datos entre aplicaciones, usado especialmente en Flash/Flex." },
    { term: "ASP", definition: "Active Server Pages. Tecnología de Microsoft para crear páginas web dinámicas utilizando scripts del lado del servidor." },
    { term: "ASP.NET", definition: "Active Server Pages .NET. Marco de desarrollo de Microsoft para construir aplicaciones web dinámicas con .NET." },
    { term: "ATOM", definition: "Formato XML alternativo a RSS para la sindicación de contenido web, especialmente blogs y noticias." },
    { term: "CERN", definition: "Conseil Européen pour la Recherche Nucléaire. Organización donde nació la web. Tim Berners-Lee desarrolló allí el primer navegador y servidor web." },
    { term: "CGI", definition: "Common Gateway Interface. Protocolo que permite a los servidores web ejecutar scripts externos y generar contenido dinámico." },
    { term: "CSS", definition: "Cascading Style Sheets. Lenguaje para describir la presentación de páginas HTML, incluyendo colores, diseño y fuentes." },
    { term: "DNS", definition: "Domain Name System. Sistema que traduce nombres de dominio (como google.com) a direcciones IP." },
    { term: "GNU", definition: "GNU’s Not Unix. Proyecto de software libre que desarrolló un sistema operativo libre similar a Unix." },
    { term: "GPRS", definition: "General Packet Radio Service. Extensión de GSM que permite la transmisión de datos por paquetes, facilitando acceso móvil a internet." },
    { term: "GSM", definition: "Global System for Mobile Communications. Estándar internacional para redes móviles de segunda generación (2G)." },
    { term: "HTML", definition: "HyperText Markup Language. Lenguaje de marcado utilizado para estructurar páginas web." },
    { term: "HTTP", definition: "HyperText Transfer Protocol. Protocolo base de comunicación de la web, permite la transferencia de información entre clientes y servidores." },
    { term: "IE", definition: "Internet Explorer. Navegador web desarrollado por Microsoft, ya descontinuado en favor de Microsoft Edge." },
    { term: "IP", definition: "Internet Protocol. Protocolo de red que permite el envío de datos entre dispositivos en Internet." },
    { term: "JSON", definition: "JavaScript Object Notation. Formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas." },
    { term: "JSP", definition: "JavaServer Pages. Tecnología de Java que permite incrustar código Java en páginas HTML para generar contenido dinámico." },
    { term: "LTE", definition: "Long Term Evolution. Estándar de red móvil 4G que proporciona acceso a internet de alta velocidad." },
    { term: "MPL", definition: "Mozilla Public License. Licencia de software libre utilizada por productos de Mozilla como Firefox y Thunderbird." },
    { term: "OS", definition: "Operating System (Sistema Operativo). Software base que gestiona los recursos de hardware y permite la ejecución de otros programas." },
    { term: "PHP", definition: "Hypertext Preprocessor. Lenguaje de programación del lado del servidor usado ampliamente para desarrollar sitios web dinámicos." },
    { term: "RIA", definition: "Rich Internet Application. Aplicaciones web que ofrecen una experiencia similar a las aplicaciones de escritorio, con mayor interactividad." },
    { term: "RDSI", definition: "Red Digital de Servicios Integrados. Tecnología que permite la transmisión digital de voz y datos a través de las líneas telefónicas." },
    { term: "RSS", definition: "Really Simple Syndication. Formato XML utilizado para distribuir contenido actualizado frecuentemente, como noticias o blogs." },
    { term: "RTC", definition: "Red Telefónica Conmutada. Infraestructura tradicional de telefonía fija basada en circuitos." },
    { term: "SGBD", definition: "Sistema de Gestión de Bases de Datos. Software que permite definir, manipular y administrar bases de datos." },
    { term: "SOAP", definition: "Simple Object Access Protocol. Protocolo basado en XML para intercambiar información estructurada en la implementación de servicios web." },
    { term: "UDDI", definition: "Universal Description, Discovery and Integration. Estándar para descubrir y describir servicios web disponibles en una red." },
    { term: "UMTS", definition: "Universal Mobile Telecommunications System. Tecnología de red móvil 3G que mejora las velocidades de transmisión de datos respecto al GSM." },
    { term: "URL", definition: "Uniform Resource Locator. Dirección que localiza recursos en Internet (por ejemplo, https://www.google.com)." },
    { term: "W3C", definition: "World Wide Web Consortium. Organización internacional que desarrolla estándares para la web, como HTML, CSS y XML." },
    { term: "WSDL", definition: "Web Services Description Language. Lenguaje basado en XML que describe servicios web y cómo comunicarse con ellos." },
    { term: "XHTML", definition: "Extensible HyperText Markup Language. Versión más estricta de HTML basada en XML." },
    { term: "XML", definition: "eXtensible Markup Language. Lenguaje de marcado extensible que permite definir estructuras personalizadas de datos." },
  ];

  const groupedGlossary = glossaryItems.reduce((acc, item) => {
    const letter = item.term.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(item);
    return acc;
  }, {});

  return (
    <div>
      <button
        className="custom-toggle-btn mb-3"
        onClick={() => setShowGlossary(!showGlossary)}
      >
        Glosario {showGlossary ? '▲' : '▼'}
      </button>

      {showGlossary && (
        <div className="mt-3 glosario-texto">
          {Object.keys(groupedGlossary).sort().map((letter) => (
            <div key={letter} className="mb-4">
              <div className="decorative-letter">{letter}</div>
              {groupedGlossary[letter].map((item, index) => (
                <div key={index} className="mb-2 glossary-item">
                  <strong>{item.term}</strong>: {item.definition}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Glossary;

