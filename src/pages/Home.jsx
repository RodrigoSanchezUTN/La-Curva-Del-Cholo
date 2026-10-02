import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>La Curva del Cholo</h1>

          <div className="hero-buttons">
            <Link to="/productos" className="btn btn-primary">
              Ver productos
            </Link>

            <Link to="/contacto" className="btn btn-secondary">
              Contactame
            </Link>
          </div>

          <p className="hero-location">Cuadro Benegas</p>
        </div>
      </section>
    </main>
  );
}

export default Home;