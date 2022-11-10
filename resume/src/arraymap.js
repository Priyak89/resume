import React, { Component } from 'react';
const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];
  function DisplayNames(props)
  {
    const userNames = props.users.map((user) => <li key = {user.id}> {user.name} </li>);
     return userNames;
  }
  

  function Names() {
    
    return (
      <div>
        <h3>User names</h3>
        <ul> {users.map((user) => <li key = {user.id}> {user.name} </li>) }</ul>
        
      </div>
    );
  }
  export default Names;