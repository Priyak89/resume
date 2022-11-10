import React, { Component } from 'react';
function Buttonexercise() {
    const [value,setValue] = React.useState("");
  
    return (
      <>
        <h3>Disable Button Challenge</h3>
        <input type="text" 
        value = {value}
        onChange = {(e)=>setValue(e.target.value)}
        />
        <button disabled = {(value.length > 0 ? false:true)}>Submit</button>
      </>
    );
  }
export default Buttonexercise;