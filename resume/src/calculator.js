import React, { Component } from 'react';
function Calculator() {
    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [total, setTotal] = React.useState(0);

    function calculateSum()
    {
        setTotal(parseInt(number1)+parseInt(number2));
    }
  
    return (
      <div>
        <h2>Adding Two Numbers</h2>
        <input placeholder="First Number" type="number" value={number1} onChange={(e)=>setNumber1(e.target.value)} />
        <input placeholder="Second Number" type="number" value={number2} onChange={(e)=>setNumber2(e.target.value)} />
  
        <button onClick={calculateSum}>Add Two Numbers</button>
        <p>Total:{total ||""}</p>
      </div>
    );
  }
  export default Calculator;