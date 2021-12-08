import React from "react";
import Quadrado from "./Quadrado";

const Bordas = ({ quadrados, onClick }) => (
  <div className="Bordas">
    {quadrados.map((quadrado, i) => (
      <Quadrado key={i} value={quadrado} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Bordas;
