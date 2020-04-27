import React from "react";
import "./Buddies.css"

const Buddies = (props) => {
  return (
    <div className="Buddies">
      <p onClick={props.click}>
      I am {props.name} and I am {props.age} years old!
      </p>

  <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default Buddies;
