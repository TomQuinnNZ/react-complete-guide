import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Tom', age: 27 },
      { name: 'Max', age: 30 },
      { name: 'Stephanie', age: 40 }
    ],
    fullToggled: false,
    showPeople: true
  }

  nameChangedHandler = (event) => {
    this.setState( {   
      persons: [
        { name: 'Tom', age: 27 },
        { name: event.target.value, age: 30 },
        { name: 'Steph', age: 40 }
      ],
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
    const people2 = [...this.state.persons];
    people.splice(index, 1);

    this.setState( {
      persons: people
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
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
            age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <p>This is a paragraph element.</p>

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

export default App;
