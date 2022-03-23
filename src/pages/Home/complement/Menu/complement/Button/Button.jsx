import React from 'react'
import './Button.scss';
const Button = () => {
 
 
  return (
    <button onClick={(e)=> validateBtn(e)} className={props.class}>{props.text}</button>   
  )
}

export default Button