import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function Diverse() {

  useEffect(() => {
    fetchItems(); 
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.github.com/users/ulvestad/repos');
    const items = await data.json();
    console.log(items)
    setItems(items)
  }; 

  return (
    <div className="scrollable-content">
      <div className="main-content-wrapper">
        <h2>Git Repos</h2>
        {items.map( (item, index) => (
        <div style={{backgroundColor:"#f2f2f2", margin:"10px auto 10px auto", padding:"2px 0px 30px 0px"}} key={index}>
          <h3>{item.name}</h3> 
          <span style={{fontWeight: "bold"}}>Description:</span><span> {item.description}</span>
          <br></br>
          <span style={{fontWeight: "bold"}}>Language: </span><span>{item.language}</span>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Diverse;
