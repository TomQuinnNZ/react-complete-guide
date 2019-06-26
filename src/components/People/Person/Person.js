import React, { Component, Fragment } from 'react';
import { MdDelete } from 'react-icons/md';

import styles from './Person.module.css';

class Person extends Component {
    render() {
        console.log('Person.js rendering...');
        return (
            <Fragment>
                <div className={styles.Person}>
                    <p className= {styles.PersonDesc}>
                        I'm {this.props.name} and I am {this.props.age} years old.
                    </p>
                    <div className={styles.deleteButton}>
                        <MdDelete 
                            className={styles.deleteIcon} 
                            size='2em'
                            onClick={this.props.click}>
                            Delete
                        </MdDelete>
                    </div>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed}/>
                </div>
            </Fragment>
        );
    }
}

export default Person;