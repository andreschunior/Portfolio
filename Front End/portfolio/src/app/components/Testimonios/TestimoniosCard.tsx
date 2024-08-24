import React from "react";
import TestimonioCardProps from "./types";

const TestimonioCard: React.FC<TestimonioCardProps> = ({
  foto,
  texto,
  nombre,
  lugar,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src={foto}
        alt={`${nombre}'s photo`}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <p className="text-gray-700 mb-4 text-center w-2/3">{texto}</p>
      <div className="font-semibold">{nombre}</div>
      <div className="text-gray-500">{lugar}</div>
    </div>
  );
};

export default TestimonioCard;
