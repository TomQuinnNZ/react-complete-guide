import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Tom', age: 27 },
      { id: 2, name: 'Max', age: 30 },
      { id: 3, name: 'Stephanie', age: 40 }
    ],
    fullToggled: false,
    showPeople: true
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let peopleList = null;

    if (this.state.showPeople) {
      peopleList = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let assignedClasses = [];

    console.log(classes);

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>

        <p className={assignedClasses.join(' ')}>This is a paragraph element.</p>

        <button 
          style={style}
          onClick={this.togglePeopleHandler}>Show/Hide People
        </button>

        { this.state.showPeople ? 
          peopleList : null
        }

      </div>
    );
  }
}

export default Radium(App);
