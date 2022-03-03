import React from 'react'
import './Button.scss';
const Button = (props,{setClicklogin}) => {
 
  const validateBtn=(e)=>{
    e.preventDefault()
    setClicklogin(true)
    console.log('boton');
  }
  return (
    <button onClick={(e)=> validateBtn(e)} className={props.class}>{props.text}</button>   
  )
}

export default Button