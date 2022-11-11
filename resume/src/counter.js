import React, { Component } from 'react';
const Mycounter = () => {
    const [value,setValue] = React.useState(0);
    function Modify(props)
    {
        if(props.value==="increment")
        {
        setValue(value+1);
        }
        else
        setValue(value-1);
    }
  
    return (
      <div>
        <h2>Counter: {value}</h2>
        <button id="1" onClick={()=>setValue(value+1)} value = "increment">Increment</button>
        <button id="2" onClick={()=>setValue(value-1)} value="decrement">Decrement</button>
      </div>
    );
  };
  export default Mycounter;