import React from 'react'
import './Title.scss'

const Title = (props) => {
  return (
    <div className='title-text'>{props.text}</div>
  )
}

export default Title