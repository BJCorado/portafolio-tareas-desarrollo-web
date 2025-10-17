// src/components/GiscusComments.js
import React, { useEffect, useRef } from "react";

export default function GiscusComments({ title = "Comentarios" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (ref.current.querySelector("iframe.giscus-frame")) return;

    const s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.async = true;
    s.crossOrigin = "anonymous";

    // Repo / categoría
    s.setAttribute("data-repo", "BJCorado/portafolio-tareas-desarrollo-web");
    s.setAttribute("data-repo-id", "R_kgDOPXVHpQ");
    s.setAttribute("data-category", "General");
    s.setAttribute("data-category-id", "DIC_kwDOPXVHpc4CwvVf");

    // Un hilo por ruta + ajustes
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-strict", "0");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "top");
    s.setAttribute("data-lang", "es");

    // Usa el MISMO archivo (iframe transparente)
    const themeUrl = `${window.location.origin}/giscus-black.css`;
    s.setAttribute("data-theme", themeUrl);

    ref.current.appendChild(s);

    // Fuerza el tema por si el iframe inicializa en claro
    const applyTheme = () => {
      const iframe = document.querySelector("iframe.giscus-frame");
      if (!iframe) return false;
      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: themeUrl } } },
        "https://giscus.app"
      );
      return true;
    };
    let tries = 0;
    const iv = setInterval(() => {
      tries++;
      if (applyTheme() || tries > 60) clearInterval(iv);
    }, 50);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      className="project-card"       // usa la misma clase de card
      style={{
        padding: 16,
        maxWidth: 1100,
        margin: "32px auto",
      }}
    >
      <h5 style={{ marginBottom: 12, color: "white" }}>{title}</h5>
      <div ref={ref} style={{ width: "100%" }} />
    </section>
  );
}
