import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
  const carritoGuardado = localStorage.getItem("carrito");

  return carritoGuardado
    ? JSON.parse(carritoGuardado)
    : [];
});
useEffect(() => {
  localStorage.setItem("carrito", JSON.stringify(cart));
}, [cart]);

  const addToCart = (producto) => {
    setCart((productosActuales) => {
      const productoExistente = productosActuales.find(
        (item) => item.id === producto.id
      );

      if (productoExistente) {
        return productosActuales.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        );
      }

      return [
        ...productosActuales,
        {
          ...producto,
          cantidad: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((productosActuales) =>
      productosActuales.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id) => {
    setCart((productosActuales) =>
      productosActuales.map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((productosActuales) =>
      productosActuales
        .map((item) =>
          item.id === id
            ? {
                ...item,
                cantidad: item.cantidad - 1,
              }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cantidadTotal = cart.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cantidadTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}