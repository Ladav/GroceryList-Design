import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import GroceryOutput from '../../components/GroceryOutput/GroceryOutput';
import GroceryForm from '../../components/GroceryForm/GroceryForm';

import classes from './Grocery.module.css';

class Grocery extends Component {
    render() {
        return (
            <div className={classes.Grocery}>
                <header>
                    <Header />
                    <GroceryForm changeHandler={(event) => this.inputHandler(event)} values={this.state} />
                </header>
                <div className={classes.Main}>
                    <GroceryOutput />
                </div>
            </div>
        );
    };
}

export default Grocery;