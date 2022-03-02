import React from 'react'
import './Button.scss';
const Button = (props) => {
  return (
    <button  className={props.class}>{props.text}</button>   
  )
}

export default Button