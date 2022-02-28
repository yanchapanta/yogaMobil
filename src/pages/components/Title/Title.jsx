import React from 'react'
import './Title.scss';

const Title = (props) => {
  return (
    <h1 className="title-text">{props.text}</h1>
  )
}

export default Title