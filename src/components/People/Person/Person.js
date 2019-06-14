import React, { Component } from 'react';

import styles from './Person.module.css';

class Person extends Component {
    render() {
        return (
            <div className={styles.Person}>
                <p className= {styles.PersonDesc} 
                    onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}/>
            </div>
            
        );
    }
}

export default Person;