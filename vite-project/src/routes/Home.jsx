import React from "react";
import Card from "../components/Card";
import { useGlobalStates } from "../components/utils/Global.Context";
import { useState } from "react";

const Home = () => {
  
  const { odontologoState, themeState } = useGlobalStates();
  const addDestacado = (destacado) => {
    dispatch({ type: 'ADD_DESTACADO', payload: destacado });
  };


  const [odontologosFavoritos, setOdontologosFavoritos] = useState(
    JSON.parse(localStorage.getItem('odontologosFavoritos') || '[]')
  )


  function agregarOdontologoFavorito(odontologoAgregar) {
    // Chequeo que el odontologo no este asi no repito
    if (
      !odontologosFavoritos.some(
        odontologoFavorito => odontologoFavorito.id === odontologoAgregar.id
      )
    ) {
      // Agrego el odontologo a favoritos
      const nuevosFavoritos = [...odontologosFavoritos, odontologoAgregar]
      setOdontologosFavoritos(nuevosFavoritos)
      localStorage.setItem(
        'odontologosFavoritos',
        JSON.stringify(nuevosFavoritos)
      )
    }
  }


  function eliminarOdontologoFavorito(odontologoAEliminar) {
    const nuevosFavoritos = odontologosFavoritos.filter(
      odontologo => odontologo.id !== odontologoAEliminar.id
    )
    setOdontologosFavoritos(nuevosFavoritos)
    localStorage.setItem(
      'odontologosFavoritos',
      JSON.stringify(nuevosFavoritos)
    )
  }
  // console.log(odontologoState);
  return (
    <main className={themeState.className}>
    <h1>Listado de Odontologos</h1>
    <div className="card-grid">
      {odontologoState.odontologoList.map((odontologo) => (
       
          <Card key={odontologo.id}
          name={odontologo.name}
          username={odontologo.username}
          id={odontologo.id}
          odontologo={odontologo}
          addOdontologo={agregarOdontologoFavorito}
          deleteOdontologo={eliminarOdontologoFavorito}


          >
          </Card>
      ))}
    
    </div>
  </main>
  );
};

export default Home;