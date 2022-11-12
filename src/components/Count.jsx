import React from "react";
import { useCounter } from "../hooks/useCounter";

const Count = () => {
  const { count, hanleAdd, handleSubstract } = useCounter(110);

  return (
    <div
      className="count"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <h2>Contador de usuarios</h2>
      <h3>{count}</h3>

      <button onClick={() => hanleAdd(10)}>Aumentar</button>
      <button onClick={() => handleSubstract(10)}>Disminuir</button>
    </div>
  );
};

export default Count;
