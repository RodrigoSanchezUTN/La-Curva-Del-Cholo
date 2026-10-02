import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Navbar() {
  const { cantidadTotal } = useCart();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="La Curva Del Cholo" />
      </Link>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>

        <Link to="/carrito" className="cart-link">
          🛒

          {cantidadTotal > 0 && (
            <span className="cart-count">
              {cantidadTotal}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;