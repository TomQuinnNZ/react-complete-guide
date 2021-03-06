import React, { Component } from 'react';

import Person from './Person/Person';

class People extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log('People.js getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('People.js shouldComponentUpdate');
    if (nextProps.people !== this.props.people) {
      return true;
    } else return false;
  }

  // render() method runs here

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('People.js getSnapshotBeforeUpdates');
    return null;
  }

  componentDidUpdate() {
    console.log('People.js componentDidUpdate');
  }

  componentWillUnmount() {
    // Runs right before the component is gotten rid of
    console.log('People.js componentWillUnmount');
  }

  render() {
    console.log('People.js rendering...');
    return (
      this.props.people.map((person, index) => {
          return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
        })
    );
  }
}

export default People;


