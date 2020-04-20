import React from "react";
import "./Buddies.css"

const Buddies = (props) => {
  return (
    <div className="Buddies">
      <p onClick={props.click}>
        unfollow
      </p>

  <input type="text" onChange={props.changed}></input>
    </div>
  );
};

export default Buddies;
