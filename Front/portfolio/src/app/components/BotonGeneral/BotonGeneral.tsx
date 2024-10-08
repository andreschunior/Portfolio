import React from "react";
import BotonConIconoProps from "./types";

const BotonConIcono: React.FC<BotonConIconoProps> = ({
  texto,
  onClick,
  icono: Icono,
}) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-6 rounded-full text-xl font-semibold border-2 transition-transform transform hover:scale-105 flex items-center text-black !important "
      style={{
        borderImage: "linear-gradient(45deg, #6ee7b7, #3b82f6) 1",
        borderColor: "transparent",
        backgroundColor: "transparent",
      }}
    >
      {Icono && <Icono className="mr-2 text-lg text-black !important" />}
      {texto}
    </button>
  );
};

export default BotonConIcono;
