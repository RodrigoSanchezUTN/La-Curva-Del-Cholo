import "./Contacto.css";

function Contacto() {
  const whatsappUrl =
    "https://wa.me/5492604403408?text=Hola%20La%20Curva%20Del%20Cholo%2C%20quiero%20hacer%20una%20consulta.";

  const mapsUrl =
    "https://maps.app.goo.gl/3FvunjBApsJCVb9E9?g_st=aw";

  return (
    <main className="contacto-page">
      <section className="contacto-header">
        <p>LA CURVA DEL CHOLO</p>

        <h1>Contacto</h1>

        <span>
          Estamos para ayudarte con tus consultas.
        </span>
      </section>

      <section className="contacto-container">

        {/* UBICACIÓN */}
        <div className="contacto-card">
          <div className="contacto-icono">
            <img
              src="/contacto/ubicacion.png"
              alt="Ubicación"
            />
          </div>

          <h2>Ubicación</h2>

          <p>Cuadro Benegas</p>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-button"
          >
            Ver ubicación
          </a>
        </div>

        {/* WHATSAPP */}
        <div className="contacto-card">
          <div className="contacto-icono">
            <img
              src="/contacto/whatsapp.png"
              alt="WhatsApp"
            />
          </div>

          <h2>WhatsApp</h2>

          <p>+54 9 260 440-3408</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-button whatsapp-button"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* INSTAGRAM */}
        <div className="contacto-card">
          <div className="contacto-icono">
            <img
              src="/contacto/instagram.png"
              alt="Instagram"
            />
          </div>

          <h2>Instagram</h2>

          <p>@lacurvadelcholo</p>

          <a
            href="https://www.instagram.com/lacurvadelcholo/"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-button"
          >
            Ver Instagram
          </a>
        </div>

      </section>
    </main>
  );
}

export default Contacto;