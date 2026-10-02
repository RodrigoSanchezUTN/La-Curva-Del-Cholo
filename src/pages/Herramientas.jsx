import ProductCard from "../components/ProductCard";
import { herramientas } from "../data/productos";
import "./Catalogo.css";

function Herramientas() {
  return (
    <main className="catalogo-page">

      <section className="catalogo-header">

        <p>LA CURVA DEL CHOLO</p>

        <h1>Herramientas</h1>

        <span>
          Herramientas para trabajos profesionales y del hogar.
        </span>

      </section>


      <section className="catalogo-content">

        <div className="catalogo-top">

          <h2>Productos</h2>

          <span>
            {herramientas.length} productos
          </span>

        </div>


        <div className="products-grid">

          {herramientas.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Herramientas;