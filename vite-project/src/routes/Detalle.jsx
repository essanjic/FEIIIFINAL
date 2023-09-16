import React, { useEffect, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalStates } from "../components/utils/Global.Context";


const Detalle = () => {
  const { id } = useParams();
  const { odontologoState, getOdontologo,themeState } =
    useGlobalStates();
  const navigate = useNavigate();
  useEffect(() => {
    getOdontologo(id);
  }, []);

  return (
    <div className={themeState.className}>
      <h1>Ver mas sobre este Odontólogo</h1>
      <div className="card">
        <h3>Nombre: {odontologoState.odontologoDetalle.name}</h3>
        <h4>Correo:{odontologoState.odontologoDetalle.email}</h4>
        <p>Teléfono: {odontologoState.odontologoDetalle.phone}</p>
        <p>Sitio Web: {odontologoState.odontologoDetalle.website}</p>
      </div>
      <button className="backButton" onClick={() => navigate(-1)}>
        ⬅
      </button>
    </div>
  );
};

export default Detalle;