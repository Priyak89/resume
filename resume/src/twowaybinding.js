import React, { Component } from 'react';
function Binding() {
    const [value,setValue] = React.useState("");
  
    return (
      <>
        <input 
        type="text"
        placeholder="Enter Text"
        value ={value}
        onChange={(e)=>setValue(e.target.value)} 
        />
        <p>{value}</p>
      </>
    );
  }
  export default Binding;