import React, {Component} from 'react';
import classes from './Person.css';


class Person extends Component {

  constructor(props){
    super(props);
    this.inputElement=React.createRef();
  }

  componentDidMount(){
    if(this.props.position===0){
      this.inputElement.current.focus();
    }
  }

  render() {
    return (
        <div className={classes.Person}>
          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input
              ref={this.inputElement}
              type="text"
              onChange={this.props.change}
              value={this.props.name}/>
        </div>
    )
  }
}

export default Person;