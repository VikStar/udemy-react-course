import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  state = {
    persons: [
      { id: 'asqw12', name: 'Vik', age: 30 },
      { id: 'ber2345', name: 'Manu', age: 29 },
      { id: 'dsq1234d', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => ({
      persons,
      changeCounter: prevState.changeCounter + 1
    }));
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />;
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({showCockpit: false}) }}>Remove Cockpit</button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          {this.state.showCockpit ? (<Cockpit
            title={this.props.appTitle}
            length={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />
          ) : null}

          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
