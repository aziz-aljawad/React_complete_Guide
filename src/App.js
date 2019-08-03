import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {

  state = {
    persons: [
      {name: 'Aziz',age: '24'},
      {name: 'Ali',age: '25'},
      {name: 'Alya', age: '26'}
    ]
  }
  switchNameHandler = ()=> {
    //console.log("was clicked");
    //DONT DO THISthis.state.persons[0].name ="Abdulaziz"
    this.setState({persons:[
      {name: 'Abdulaziz',age: '24'},
      {name: 'Ali',age: '299'},
      {name: 'Alya', age: '27'}
    ]
  })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi,I'm a React App</h1>
        <p>This is really working!!!</p>
        <button onClick= {this.switchNameHandler} >Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies are racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work now??'));
  }
}

export default App;
