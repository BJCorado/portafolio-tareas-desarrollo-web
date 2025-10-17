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

    // Config de tu repo/categoría
    s.setAttribute("data-repo", "BJCorado/portafolio-tareas-desarrollo-web");
    s.setAttribute("data-repo-id", "R_kgDOPXVHpQ");
    s.setAttribute("data-category", "General");
    s.setAttribute("data-category-id", "DIC_kwDOPXVHpc4CwvVf");

    // Un hilo por ruta
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-strict", "0");

    // Reacciones / metadata / input arriba
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "top");

    // 🚀 Tema NEGRO desde /public con URL ABSOLUTA
    const themeUrl = `${window.location.origin}/giscus-black.css`;
    s.setAttribute("data-theme", themeUrl);

    s.setAttribute("data-lang", "es");

    ref.current.appendChild(s);

    // 🔁 Forzar el tema cuando el iframe existe (por si inicializa claro)
    const applyTheme = () => {
      const iframe = document.querySelector("iframe.giscus-frame");
      if (!iframe) return false;
      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: themeUrl } } },
        "https://giscus.app"
      );
      return true;
    };

    // Intentos durante 3s para pillar el iframe
    let tries = 0;
    const iv = setInterval(() => {
      tries++;
      if (applyTheme() || tries > 60) clearInterval(iv);
    }, 50);

    return () => clearInterval(iv);
  }, []);

  return (
    <section
      style={{
        background: "#000",    // fondo externo negro (detrás del iframe)
        borderRadius: 16,
        padding: 16,
        maxWidth: 1100,
        margin: "32px auto",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      <h5 style={{ marginBottom: 12, color: "#e5e7eb" }}>{title}</h5>
      <div ref={ref} style={{ width: "100%" }} />
    </section>
  );
}
