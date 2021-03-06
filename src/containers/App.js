import React, { Component } from 'react';
import Radium from 'radium';
import classes from './App.module.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Tom', age: 27 },
      { id: 2, name: 'Max', age: 30 },
      { id: 3, name: 'Stephanie', age: 40 }
    ],
    fullToggled: false,
    showPeople: true,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {

    // match the argument id with a person object
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      // grab a COPY of the person object in question
      ...this.state.persons[personIndex]
    }

    // set the person "name" property to our new input value
    person.name = event.target.value;

    // make a COPY of the persons state object, and add our modified person to it
    const people = [...this.state.persons];
    people[personIndex] = person;

    // set the state object to the value of our new persons array.
    this.setState( {   
      persons: people,
      fullToggled: false  })
  }

  togglePeopleHandler = () => {
    const currentState = this.state.showPeople;
    this.setState( {
      showPeople: !currentState
    })
  }

  deletePersonHandler = (index) => {
    // people and people2 assignments are equivalent!
    const people = this.state.persons.slice();
    //const people2 = [...this.state.persons];
    people.splice(index, 1);

    this.setState( {
      persons: people
    });
  }

  render() {
    console.log('App.js render');
    let peopleList = null;

    if (this.state.showPeople) {
      peopleList = (
          <People
            people={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );      
    }

    return (
      <div className={classes.App}>
        <button 
          onClick={() => {this.setState({ showCockpit: false })}}>Remove cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
          showPeople={this.state.showPeople}
          people={this.state.persons}
          toggle={this.togglePeopleHandler} /> : null}
        { this.state.showPeople ? 
          peopleList : null
        }

      </div>
    );
  }
}

export default Radium(App);
