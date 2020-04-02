import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './GroceryForm.module.css';
import * as action from '../../store/action/action';

const GroceryForm = (props) => {
    const [enteredName, setName] = useState('');
    const [enteredPrice, setPrice] = useState('');
    const [enteredRemarks, setRemarks] = useState('');

    const clickHandler  = (e) => {
        e.preventDefault();
        if(enteredName.trim() === '')  return;
        props.addItem({
            name: enteredName,
            price: enteredPrice,
            remarks: enteredRemarks
        });
        // reinitialize 
        setName('');
        setPrice('');
        setRemarks('');
    };

    return (
        <div className={classes.GroceryForm}>
            <form onSubmit={clickHandler}>
            <div className={classes.Row__1}>
                <label className={classes.Name}>Name</label>
                <input
                    type="text"
                    name="name"
                    value={enteredName}
                    onChange={e => setName(e.target.value)}
                    placeholder="name of the grocery?" 
                    required/>

                <label className={classes.Price}>Price</label>
                <input
                    type="number"
                    name="price"
                    value={enteredPrice}
                    onChange={e => setPrice(e.target.value)}
                    placeholder="Cost..." /> <br />
            </div>
            <div className={classes.Row__2}>
                <label className={classes.Remarks}>Remarks</label>
                <input
                    type="text"
                    name="remarks"
                    value={enteredRemarks}
                    onChange={e => setRemarks(e.target.value)}
                    placeholder="Remarks, feel free to add Quantity here or any remarks..." />

                <button type="submit" className={classes.Button}>Add To List</button>
            </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(action.addItemHandler(item))
    };
};

export default connect(null, mapDispatchToProps)(GroceryForm);