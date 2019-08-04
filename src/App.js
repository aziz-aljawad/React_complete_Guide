import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
 
class App extends Component {
 
  state = {
 
    persons:[
 
      {name:"aziz", age:24},
      {name:"Ali", age:26},
      {name:"alya", age:26}
 
    ]
 
  }
 
    switchNameHandler =(newName)=>{
 
      // console.log("Hello!");
      this.setState( {
          persons : [
          {name:newName, age:21},
          {name:"oldman ali", age:9999999999999},
          {name:"alya", age:26}
        ]
       })
      }


      nameChangedHandler = (event) => {
         
      // console.log("Hello!");
      this.setState( {
        persons : [
        {name:"aziz", age:21},
        {name:"oldman ali", age:9999999999999},
        {name: event.target.value, age:26}
      ]
     })
      }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
      <h3>This is a React App</h3>
      <p>And it actually works!</p>
      <button 
      style={style}
      onClick={() => this.switchNameHandler('aziz!!!')}>Switch Names</button>
      <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}>
              Hobbies : Coding, Gaming, Astronomy,Movies
      </Person>
      <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this,'Abdulaziz!!!')}>
              Hobbies : Painting,being boring,annoying people
      </Person>
      <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              changed={this.nameChangedHandler}>
              Hobbies : social media,movies
      </Person>
      </div>
    );
  }
}
 
export default App;