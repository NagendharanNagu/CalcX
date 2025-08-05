import React from 'react'
import "../css/button.css"


const Button = (props) => {
  let{label, onClick}= props
  // console.log(props)
  
  return (
    <div className='button'>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button
