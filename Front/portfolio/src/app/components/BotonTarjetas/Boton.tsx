import React from "react";
import BotonProps from "./types";

const Boton: React.FC<BotonProps> = ({ texto, onClick, url }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
    }
  };

  return (
    <button
      onClick={handleClick}
      className="py-2 px-6 rounded-full text-sm font-semibold border-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
      style={{
        borderImage: "linear-gradient(45deg, #6ee7b7, #3b82f6) 1",
        borderColor: "transparent",
        backgroundColor: "transparent",
      }}
    >
      {texto}
    </button>
  );
};

export default Boton;
