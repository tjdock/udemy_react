import React, {Component} from 'react';
import Person from "./Person/Person";
import PropTypes from 'prop-types';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()', nextProps, nextState);
  }

  render() {
    console.log('[Persons.js] Inside render()');

    return this.props.persons.map((person, index) => {
      return <Person name={person.name} age={person.age}
                     click={() => this.props.clicked(index)}
                     position={index}
                     key={person.id}
                     change={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Persons;