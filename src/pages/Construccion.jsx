import ProductCard from "../components/ProductCard";
import { construccion } from "../data/construccion";
import "./Catalogo.css";

function Construccion() {
  return (
    <main className="catalogo-page">
      <section className="catalogo-header">
        <p>LA CURVA DEL CHOLO</p>

        <h1>Construcción</h1>

        <span>
          Productos para tus trabajos de construcción.
        </span>
      </section>

      <section className="products-grid">
        {construccion.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>
    </main>
  );
}

export default Construccion;