import {React,Fragment,useState} from 'react'

const Listado=()=> {
  // const [numero, setNumero]=useState(['uno','dos','tres','cuatro','cinco','seis']);
  const [numero, setNumero]=useState([1,2,'tres','cuatro','cinco','seis']);

 
  return (
    <Fragment>
     
     <h2>Listado de n</h2>
     <ul>
       {
       numero.map((item,index)=>
          <li key={index}>ol {item}</li>
       )
       }
     </ul>

    </Fragment>
  )
}

export default Listado