import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    let assignedClasses = [];
    if (removePropertiesDeep.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>

            <p className={assignedClasses.join(' ')}>This is a paragraph element.</p>

            <button 
            className={btnClass}
            onClick={this.togglePeopleHandler}>Show/Hide People
            </button>
        </div>
    );
}

    


export default cockpit;