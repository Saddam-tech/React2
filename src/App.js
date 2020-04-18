import React, { Component } from 'react';
import './App.css';
import Buddies from './Buddies/Buddies';

class App extends Component {
  
  state = {
    Buddies: [
      {name: 'Saddam', age:'22'},
      {name: 'Jobirhon', age:'24'},
      {name: 'Tillo', age:'23'},
    ]
  };
  
  switchNameHandler = (newName) => {
    this.setState({ 
      Buddies: [
        {name: newName, age:'22'},
        {name: 'Jobirhon aka!!!!', age:'24'},
        {name: 'Tillohon aka!!!!!', age:'23'},
      ]

    })
  }

  onChangeHandler = (event) => {
   this.setState ({
    Buddies: [
      {name: event.target.value, age:'22'},
      {name: 'Jobirhon aka!!!!', age:'24'},
      {name: 'Tillohon aka!!!!!', age:'23'},
    ]

   })

  }




  
  
  
  
  
  render() {

    const style = {
      backgroundColor: '#ccc',
      border: '1px solid blue',
      font: 'inherit',
      cursor: 'pointer',
      padding: '8px',


    }
    return(
      <div className="App">
        <h1> Hello, I am React App!</h1>
        <button style={style} onClick={() => this.switchNameHandler('Saddambek!!!')}>Switch Name</button>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Saddamshi!!!')}>Switch Name2</button>

        <Buddies 
        name={this.state.Buddies[0].name} 
        age={this.state.Buddies[0].age}
        click={() => this.switchNameHandler('Saddambek!!!!!')}
        changed={this.onChangeHandler} />

        <Buddies 
        name={this.state.Buddies[1].name} 
        age={this.state.Buddies[1].age} />

        <Buddies 
        name={this.state.Buddies[2].name} 
        age={this.state.Buddies[2].age} />
      </div>
    )
  }
}
   

export default App;
