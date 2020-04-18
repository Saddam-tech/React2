import React from "react";
import "./Buddies.css"

const Buddies = (props) => {
  return (
    <div className="Buddies">
      <p onClick={props.click}>
        I am {props.name} and I am {props.age}
      </p>

      <input type="text" onChange={props.changed}></input>
    </div>
  );
};

export default Buddies;
