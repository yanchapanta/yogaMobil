import React,{useState,useEffect} from 'react'

const Base = () => {
    const [nombre,setNombre]=useState('Pedro')
    //carga todo y despues carga useEffect
    useEffect(()=>{
        setTimeout(() => {
            setNombre('Manuel')
        }, 2000);
    })
  return (
    <div>Esta es mi pagina base

        <br />
        {nombre}

    </div>

  )
}

export default Base