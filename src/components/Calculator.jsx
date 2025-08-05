import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "../css/calculator.css";
import "../css/display.css";
import "../css/button.css";

const Calculator = () => {
  //! initializing the state
  const [current, setCurrent] = useState(0);
  const [operator, setOperator] = useState(null);
  const [previous, setPrevious] = useState(null);

  const buttons = ["9", "8", "7", "+","6", "5", "4","-","3", "2", "1", "x","0", ".", "=", "/" ]; // Array for Number grid
  

  //function to decide the type of the button pressed
  const handleClick = (value)=>{
   if(!isNaN(value) || value ==="."){
    handleNumber(value)
   }
   else if((["+", "-", "x", "/"]).includes(value)){
    handleOperator(value)
   }
   else if(value === "="){
    handleEqual(value)
   }
   else if(value==="AC"){
    handleclear(value)
   }
  }

  //function to handle numbers
  const handleNumber = (value)=>{
    if(current !== "0" && !isNaN(value)){
      setCurrent(value)
    }
    else if(current==="0" && value !=="."){
      setCurrent(value)
    }
    else if(value==="." && current.includes(".")){
      return 
    }
    else{
      setCurrent(current+value)
    }
  }
  //function to handle operator
  const handleOperator = (Opr)=>{
    if(operator && previous !== null){
      calculate()
    }
    else{
      setPrevious(current)
      setCurrent("0")
    }
    setOperator(Opr)
  }
  //function to handle equal
  const handleEqual = ()=>{
    if(operator&&previous !==null){
      calculate()
    }
  }

  //function to handle AC
  const handleAC = ()=>{
    setCurrent("0")
    setOperator(null)
    setPrevious(null)
  }

  //function to perform arithmetic operations
  const calculate = ()=>{
    const number1 = parseFloat(previous)
    const number2 = parseFloat(current)
    let result = 0

    switch(operator){
      case "+" :
        result = number1+number2
        break;
      case "-" :
        result = number1-number2
        break;
      case "x" :
        result = number1*number2
        break;
      case "/" :
        result = number2 !== 0 ? number1/number2 : "Infinity"
        break;
      default :
      return;
    }
    setCurrent(result.toString());
    console.log(result)
    setOperator(null)
    setPrevious(null)
  }


  return (
    <div className="calc_Container">
      <h2>React Calculator</h2>
      <Display value={current} />
      <div className="button_grid">
        <div className="num_grid">
          {buttons.map((btn, index) => (
            <Button key={index} label={btn} onClick={()=>{handleClick(btn)}}/>
          ))}
        </div>
      </div>
      <button className="reset_btn" onClick={handleAC}>AC</button>
    </div>
  );
};

export default Calculator;
