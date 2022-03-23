import React from 'react'
import './Label.scss'
const Title = (props) => {
  return (
    <label for={props.for} className={props.class}>
			 					{props.text}
			 				</label>
  )
}

export default Title