import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph element.</p>
        <Person name="Tom" age="27" />
        <Person name="Max" age="30">Max likes to code.</Person>
      </div>
    );
  }
}

export default App;
