import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/action/action';

import GroceryItem from './GroceryItem/GroceryItem';
import classes from './GroceryOutput.module.css';

const groceryOutput = (props) => {
    const list = props.items.map(item => {
        return <GroceryItem 
        key={item.id} 
        id={item.id}
        name={item.name}
        price={item.price}
        remarks={item.remarks}
        clickListener={props.deleteItem} />
    })
    return (
        <div className={classes.GroceryOutput}>
            {list}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => dispatch(action.deleteItemHandler(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(groceryOutput);