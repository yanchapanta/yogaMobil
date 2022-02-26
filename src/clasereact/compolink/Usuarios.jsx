import React,{ Fragment,useState,useEffect} from 'react'
import axios from 'axios'
import {  Link } from 'react-router-dom';
const Usuarios = () => {
  const [usuarios,setUsuarios]=useState([])

  const obtenerUsuarios = async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = await res.data
    setUsuarios(users)
  }
  useEffect(()=>{
    obtenerUsuarios()
  },[])
  return (
    <Fragment>
      
    <h2>Lista de usuarios</h2>
    {
      usuarios.map((item)=>(
        <div>
          <Link to={`/usuario/${item.id}`} key={item.id}> {item.name}</Link>
        </div>
      ) )
    }
    </Fragment>
  )
}

export default Usuarios