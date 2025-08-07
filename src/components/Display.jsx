import React from 'react'
import "../css/display.css"

const Display = (props) => {
  let{value,setCurrent}=props

  //handleChange
  const handleChange = (e) =>{
    setCurrent(e.target.value)
  }

  return (
    <div className='display_Container' aria-label="calculator-display">
      <input type="text" name={value} value={value} onChange={handleChange}/>
    </div>
  )
}

export default Display
