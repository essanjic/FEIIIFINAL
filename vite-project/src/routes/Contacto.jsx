import React from 'react'
import Form from '../components/Form'
import { useGlobalStates } from '../components/utils/Global.Context'

const Contacto = () => {
 const {themeState} = useGlobalStates();
  return (
    
    <div  className= {themeState.className}  >
     <div className='contact'>
       <h1>¡Encuéntranos!</h1>
      <h2>¿Estás interesado en algo más?</h2>
      <p>Envía tus consultas y te contactamos </p>
      <span></span>
    </div>
      <Form/>
    </div>
  )
}

export default Contacto