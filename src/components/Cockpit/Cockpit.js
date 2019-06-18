import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    useEffect(() => {
      console.log('Cockpit.js useEffect');
      // Simulate an HTTP request:
      setTimeout(() => {
        alert('Saved data to cloud!');
      }, 1000);
    }, [props.people]);
    
    let btnClass = '';

    if (props.showPeople) {
        btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (props.people.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.people.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>

            <p className={assignedClasses.join(' ')}>This is a paragraph element.</p>

            <button 
            className={btnClass}
            onClick={props.toggle}>Show/Hide People
            </button>
        </div>
    );
}

    


export default Cockpit;