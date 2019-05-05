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
    fullToggled: false
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

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph element.</p>
        <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler}>
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;
