import React, { Component } from 'react';
function Child() {
    return <div>This is children content</div>;
  }
  
  // Add code only here
  //why is the function argument children and not child?
  function Parent({children}) {
    return (
      <div>
        <h3>Parent Component</h3>
        <Child />
        <h4>{children}</h4>
      </div>
    );
  }
  
  function Application() {
    return (
      <Parent>
        <Child /><Child />
      </Parent>
    );
  }
export default Application;