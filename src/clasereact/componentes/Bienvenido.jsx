import React from 'react'

function Bienvenido(prorsWIndowMain) {
    const {nombre, apellido}=prorsWIndowMain
  return (

    <div>Bienvenido, {nombre} -  { apellido}</div>
  )
}

export default Bienvenido