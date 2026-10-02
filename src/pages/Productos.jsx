import { Link } from "react-router-dom";
import "./Productos.css";

function Productos() {
  return (
    <main className="productos-page">

      <section className="productos-header">

        <p>LA CURVA DEL CHOLO</p>

        <h1>Nuestros productos</h1>

        <span>
          Encontrá todo lo que necesitás para tus proyectos.
        </span>

      </section>

      <section className="categorias">

        <Link
          to="/herramientas"
          className="categoria-card herramientas"
        >
          <div className="categoria-overlay">

            <h2>Herramientas</h2>

            <p>
              Herramientas para trabajos profesionales y del hogar.
            </p>

            <span>
              Ver catálogo →
            </span>

          </div>
        </Link>


        <Link
          to="/construccion"
          className="categoria-card construccion"
        >
          <div className="categoria-overlay">

            <h2>Construcción</h2>

            <p>
              Materiales y productos para tus obras y proyectos.
            </p>

            <span>
              Ver catálogo →
            </span>

          </div>
        </Link>


        <Link
          to="/buloneria"
          className="categoria-card buloneria"
        >
          <div className="categoria-overlay">

            <h2>Bulonería</h2>

            <p>
              Tornillos, tuercas, bulones y mucho más.
            </p>

            <span>
              Ver catálogo →
            </span>

          </div>
        </Link>

      </section>

    </main>
  );
}

export default Productos;