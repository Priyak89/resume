import React, { Component } from 'react';

function Togglebutton() {
    const [press, didToggle] = React.useState(true);
    return (
     <>
        <button onClick={()=>didToggle(!press)}>
        {press ? "Hide Button":"Show button"}
        </button>
  
        {press && <div>Toggle Challenge</div>}
        </>
    );
  }
  export default Togglebutton;
  //ReactDOM.render(<App />, document.getElementById("root"));