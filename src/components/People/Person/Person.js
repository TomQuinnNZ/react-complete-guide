import React, { Component } from 'react';
import { MdDelete } from 'react-icons/md';

import styles from './Person.module.css';

class Person extends Component {
    render() {
        return (
            <div className={styles.Person}>
                <p className= {styles.PersonDesc}>I'm {this.props.name} and I am {this.props.age} years old.
                </p>
                <p className={styles.deleteButton}>
                    <MdDelete 
                        className={styles.deleteIcon} 
                        size='2em'
                        onClick={this.props.click}>Delete
                    </MdDelete>
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}/>
            </div>
            
        );
    }
}

export default Person;