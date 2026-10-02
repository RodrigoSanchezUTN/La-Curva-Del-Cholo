import ProductCard from "../components/ProductCard";
import { buloneria } from "../data/buloneria";
import "./Catalogo.css";

function Buloneria() {
  return (
    <main className="catalogo-page">
      <section className="catalogo-header">
        <p>LA CURVA DEL CHOLO</p>

        <h1>Bulonería</h1>

        <span>
          Tornillos, tuercas y elementos de fijación.
        </span>
      </section>

      <section className="products-grid">
        {buloneria.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>
    </main>
  );
}

export default Buloneria;