import React from "react";

const Presentation = ({ person, hobbis }) => {
  return (
    <>
      <div>
        <h2>{person.nombre}</h2>
        <strong>{person.age}</strong>
        <p>{person.email}</p>
        <p>{person.casado ? "Eres Casado" : "No eres casadp"}</p>
      </div>
    </>
  );
};

export default Presentation;
