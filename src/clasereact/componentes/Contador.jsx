import {React,Fragment,useState} from 'react'

function Contador() {
  const [numero, setNumero]=useState(0);
  const aumentar=()=>{
    setNumero(numero + 1);
  }
  const disminuir=()=>{
    setNumero(numero - 1);
  }
  return (
    <Fragment>
      
      Número inicial :
      <strong>{numero}</strong> <br />
      <button onClick={aumentar}>aumentar</button>      
      <button onClick={disminuir}>disminuir</button>

      

    </Fragment>
  )
}

export default Contador