import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'id1', name: 'Max', age: 28},
      {id: 'id2', name: 'Manu', age: 29},
      {id: 'id3', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return <Person name={person.name} age={person.age}
                               click={() => this.deletePersonHandler(index)}
                               key={person.id}
                               change={(event) => this.nameChangedHandler(event, person.id)}/>
              })
            }
          </div>
      );
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
