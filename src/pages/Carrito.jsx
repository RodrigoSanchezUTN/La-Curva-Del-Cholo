import { useCart } from "../context/useCart";
import "./Carrito.css";

function Carrito() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const enviarWhatsApp = () => {
    if (cart.length === 0) return;

    let mensaje =
      "Hola, La Curva Del Cholo 👋\n\n" +
      "Quiero consultar por los siguientes productos:\n\n";

    cart.forEach((producto) => {
      mensaje += `• ${producto.nombre} x${producto.cantidad}\n`;
    });

    mensaje +=
      "\n¿Me podrían pasar los precios y la disponibilidad?\n\n" +
      "Muchas gracias.";

    const whatsappUrl = `https://wa.me/5492604403408?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="carrito-page">
      <section className="carrito-header">
        <p>LA CURVA DEL CHOLO</p>

        <h1>Mi carrito</h1>

        <span>
          Revisá los productos antes de realizar la consulta.
        </span>
      </section>

      {cart.length === 0 ? (
        <section className="carrito-vacio">
          <h2>Tu carrito está vacío</h2>

          <p>
            Agregá productos desde nuestro catálogo.
          </p>
        </section>
      ) : (
        <section className="carrito-container">
          <div className="carrito-productos">
            {cart.map((producto) => (
              <article
                className="carrito-item"
                key={producto.id}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                />

                <div className="carrito-info">
                  <h2>{producto.nombre}</h2>

                  <p>{producto.descripcion}</p>
                </div>

                <div className="cantidad-control">
                  <button
                    onClick={() =>
                      decreaseQuantity(producto.id)
                    }
                  >
                    −
                  </button>

                  <span>{producto.cantidad}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(producto.id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="eliminar-button"
                  onClick={() =>
                    removeFromCart(producto.id)
                  }
                >
                  Eliminar
                </button>
              </article>
            ))}
          </div>

          <div className="carrito-resumen">
            <h2>Productos seleccionados</h2>

            <p>
              {cart.reduce(
                (total, producto) =>
                  total + producto.cantidad,
                0
              )}{" "}
              productos
            </p>

            <button
              className="whatsapp-cart-button"
              onClick={enviarWhatsApp}
            >
              Enviar consulta por WhatsApp
            </button>

            <button
              className="vaciar-button"
              onClick={clearCart}
            >
              Vaciar carrito
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default Carrito;