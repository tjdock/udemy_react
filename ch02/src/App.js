import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 27},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  };

  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button
              style={style}
              onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler}/>
          <Person name="Manu" age="29">My Hobbies:Racing</Person>
          <Person name="Stephanie" age="26"/>
        </div>
    );
  }
}

export default App;
