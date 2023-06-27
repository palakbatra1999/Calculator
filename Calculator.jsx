import React, { useState } from "react";
import './calc.css'

const Calculator = () => {

    const[expression,setexpression]=useState("");

    const handleevent = (value)=>{
       if(value==="C")
       {
        setexpression("");
       }
       else if(value==="=")
       {
      try{
          setexpression(eval(expression));
      }
      catch(error)
      {
        console.log(error);
      }

       }
       else setexpression(expression+value);

    }

    return (
        <>

            <div className="calculator">

                <div className="calculator__result">
                    <input value={expression} type="text" readOnly
                    />
                </div>

                <div className="calculator__buttons">
                    
                       <div>
                        <button className="button" onClick={()=> handleevent("1")}>1</button>
                        <button className="button" onClick={() => handleevent("2")}>2</button>
                        <button className="button" onClick={() => handleevent("3")}>3</button>
                        <button className="button" onClick={() => handleevent("+")}>+</button>
                       </div>

                    <div>
                        <button className="button" onClick={() => handleevent("4")}>4</button>
                        <button className="button" onClick={() => handleevent("5")}>5</button>
                        <button className="button" onClick={() => handleevent("6")}>6</button>
                        <button className="button" onClick={() => handleevent("-")}>-</button>
                    </div>

                    <div>
                        <button className="button" onClick={() => handleevent("7")}>7</button>
                        <button className="button" onClick={() => handleevent("8")}>8</button>
                        <button className="button" onClick={() => handleevent("9")}>9</button>
                        <button className="button" onClick={() => handleevent("*")}>*</button>
                    </div>

                    <div>
                        <button className="button" onClick={() => handleevent("C")}>C</button>
                        <button className="button" onClick={() => handleevent("=")}>=</button>
                        <button className="button" onClick={() => handleevent("/")}>/</button>
                        <button className="button" onClick={() => handleevent("0")}>0</button>
                    </div>
                    

                </div>

            </div>
        </>
    )


}

export default Calculator;
