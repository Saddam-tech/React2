import React, { Component } from "react";
import "./App.css";
import Buddies from "./Buddies/Buddies";

class App extends Component {
  state = {
    Buddies: [
      {id: "qwertss34", name: "Saddam", age: "22" },
      {id: "qwertsfg23", name: "Jobirhon", age: "24" },
      {id: "qwertrgr12", name: "Tillo", age: "23" },
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

   deleteBuddiesHandler = (buddyIndex) => {
     const buddies = [...this.state.Buddies];
     buddies.splice(buddyIndex, 1);
     this.setState({Buddies: buddies}); 

   };

   onChangeHandler = () => {


   }

  render() {

     
     

    let persons = <button onClick={this.onToggleHandler}>
   ToggleBuddies
  </button>;

    if (this.state.showPersons) {
      persons = (
        <div>
             {this.state.Buddies.map((buddy, index) => {
               return (
                 <Buddies 
                 name={buddy.name}
                 age={buddy.age}
                 click={() => this.deleteBuddiesHandler(index)}
                 key={buddy.key}
                 />
               );
             })}
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
