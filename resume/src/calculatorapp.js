import React, { Component } from 'react';
import './calculatorapp.css';
function MyCalculator()
{
    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [result, setResult] = React.useState(0);
    const[buttonpress,setButtonpress]=React.useState();

    function Addtion()
    {
        setResult(parseInt(number1)+parseInt(number2));
    }
    function Subtraction()
    {
        setResult(parseInt(number1)-parseInt(number2));
    }
    function Multiplication()
    {
        setResult(parseInt(number1)*parseInt(number2));
    }
    function Division()
    {
        setResult(parseInt(number1)/parseInt(number2));
    }
    function Percentage()
    {
        setResult((parseInt(number1)/parseInt(number2))*100);
    }
    function Reset()
    {
        setNumber1(0);
        setNumber2(0);
        setResult(0);
        
    }
    function ClickHandler(getNumber)
    
    {
        if (getNumber==="1")
            setNumber1(1);
            
    else
    if (getNumber==="2")
    {
        setNumber1(2);
    }
}

    
    return(
        <div>
            <h3>My Calculator</h3>
            <input placeholder='First Number' type="number" value={number1} onChange={(e)=>setNumber1(e.target.value)}></input>
            <input placeholder='Second Number' type="number" value={number2} onChange={(e)=>setNumber2(e.target.value)}></input>
            <input placeholder='Result' type="number" value={result} disabled={true}></input>
            <h2>Result:{result|| ""}</h2>
            <input type= "radio" name="calc" id="number1" value = "number1" onChange={()=>setNumber1(number1)} ></input>
            <label for="number1">Number 1 </label><br></br>
            <input type= "radio"  name="calc" id="number2" value = "number2" onChange={()=>setNumber2(number2)} ></input>
            <label for="number2">Number 2 </label><br></br>
            <button onClick={Addtion}>Add</button><br></br>
            <button onClick={Subtraction}>Subtract</button><br></br>
            <button onClick={Multiplication}>Multiply</button><br></br>
            <button onClick={Division}>Divide</button><br></br>
            <button onClick={Percentage}>Percentage</button><br></br>
            <button onClick={Reset}>Reset</button><br></br>
            <button id="1" >0</button>
            <button id="2" onClick={()=>ClickHandler(1)}>1</button>
            <button id="3" onClick={()=>ClickHandler(2)}>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>

        </div>
    );
    }
export default MyCalculator;