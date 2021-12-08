import React from "react";

const Quadrado = ({ value, onClick }) => {
  const style = value ? `quadrados ${value}` : `quadrados`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Quadrado;
