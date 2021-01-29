import React from 'react'
import './Button.css'


const Button = ({ onClick, title }) => {
   return (
      <button id='new-quote' onClick={onClick}>{title}</button>
   )
}

export default Button;
