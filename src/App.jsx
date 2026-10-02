import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Carrito from "./pages/Carrito";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Herramientas from "./pages/Herramientas";
import Construccion from "./pages/Construccion";
import Buloneria from "./pages/Buloneria";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/construccion" element={<Construccion />} />
        <Route path="/buloneria" element={<Buloneria />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;