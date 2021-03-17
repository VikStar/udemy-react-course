import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.input.current.focus()
    console.log(this.context.authenticated)
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input ref={this.input} type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    );
  }
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
