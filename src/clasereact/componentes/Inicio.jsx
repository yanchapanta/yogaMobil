import React from 'react'
import { useParams } from 'react-router-dom'

const Inicio = () => {
    const {id,nombre,edad}=useParams()

  return (
    <div>Inicio

        {id} <br />
        {nombre} <br />
        {edad} <br />

    </div>
  )
}

export default Inicio