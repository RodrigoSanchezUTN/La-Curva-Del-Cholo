import { useCart } from "../context/useCart";

function ProductCard({ producto }) {
  const { addToCart } = useCart();

  const consultarPrecio = () => {
    const mensaje = `Hola, quería consultar el precio del ${producto.nombre}.`;

    const whatsappUrl = `https://wa.me/2604403408?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <article className="product-card">

      <div className="product-image">
        <img
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>

      <div className="product-info">

        <h2>{producto.nombre}</h2>

        <p>{producto.descripcion}</p>

        <div className="product-actions">

          <button
            className="add-cart-button"
            onClick={() => addToCart(producto)}
          >
            Agregar al carrito
          </button>

          <button
            className="consult-price-button"
            onClick={consultarPrecio}
          >
            Consultar precio
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;