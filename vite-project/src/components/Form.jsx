import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailValidation = emailRegex.test(data.email);
    if (data.nombre.length >= 5 && emailValidation && data.nombre[0] !== " ") {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };
  return (
    <div className="contact">
      <form onSubmit={handlerSubmit}>
        <label>Nombre y Apellido </label>
        <input
          type="text"
          value={data.nombre}
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <button className="enviarButton" type="submit">
          {" "}
          Agregar{" "}
        </button>
      </form>
      {err && (
        <p className="error">Por favor vuelva a verificar su información.</p>
      )}
      {show && (
        <p className="alert">¡Gracias {data.nombre}, estaremos en contacto!</p>
      )}
    </div>
  );
};

export default Form;