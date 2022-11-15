import React, { Component } from 'react';
function MyCalculator()
{
    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [result, setResult] = React.useState(0);
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

    return(
        <div>
            <h3>My Calculator</h3>
            <input placeholder='First Number' type="number" value={number1} onChange={(e)=>setNumber1(e.target.value)}></input>
            <input placeholder='Second Number' type="number" value={number2} onChange={(e)=>setNumber2(e.target.value)}></input>
            <input placeholder='Result' type="number" value={result} disabled={true}></input>
            <h2>Result:{result|| ""}</h2>
            <input type= "radio" id="number1" value = "number 1" >First Number</input>
            <input type= "radio" id="number2" value = "number 2" >Second Number</input>
            <button onClick={Addtion}>Add</button>
            <button onClick={Subtraction}>Subtract</button>
            <button onClick={Multiplication}>Multiply</button>
            <button onClick={Division}>Divide</button>
            <button onClick={Percentage}>Percentage</button>
            <button onClick={Reset}>Reset</button>
            <button>0</button>
            <button>1</button>
            <button>2</button>
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