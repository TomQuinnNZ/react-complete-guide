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

  switchNameHandler = () => {
    if (this.state.fullToggled === true) {
      this.setState( {   
        persons: [
          { name: 'Tom', age: 27 },
          { name: 'Max', age: 30 },
          { name: 'Steph', age: 40 }
        ],
        fullToggled: false  })
    }
    else {
      this.setState({   
        persons: [
          { name: 'Thomas', age: 27 },
          { name: 'Maximillian', age: 30 },
          { name: 'Stephanie', age: 40 }
        ],
        fullToggled: true  })
    }
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
          {this.state.persons.map(person => {
            return <Person 
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
