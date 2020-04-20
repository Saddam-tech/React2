import React, { Component } from "react";
import "./App.css";
import "./Buddies";

class App extends Component {
  state = {
    Buddies: [
      { name: "Saddam", age: "22" },
      { name: "Jobirhon", age: "24" },
      { name: "Tillo", age: "23" },
    ],

    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      Buddies: [
        { name: newName, age: "22" },
        { name: "Jobirhon aka!!!!", age: "24" },
        { name: "Tillohon aka!!!!!", age: "23" },
      ],
    });
  };

  onChangeHandler = (event) => {
    this.setState({
      Buddies: [
        { name: event.target.value, age: "22" },
        { name: "Jobirhon aka!!!!", age: "24" },
        { name: "Tillohon aka!!!!!", age: "23" },
      ],
    });
  };

  onToggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
     

    let persons = <button className={sss}onClick={this.onToggleHandler}>
    follow
  </button>;

    if (this.state.showPersons) {
      persons = (
        <div>
            <button className={sss} onClick={this.onToggleHandler}>
          unfollow
        </button>
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hello, I am React App!</h1>
         

       {persons}
      
      </div>
    );
  }
}

export default App;
