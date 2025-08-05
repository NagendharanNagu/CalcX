import React from 'react'
import "../css/display.css"

const Display = (props) => {
  let{value}=props
  return (
    <div className='display_Container' aria-label="calculator-display">
      {value}
    </div>
  )
}

export default Display
