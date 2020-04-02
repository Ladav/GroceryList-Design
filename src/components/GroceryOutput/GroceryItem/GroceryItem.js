import React, { Fragment } from 'react';

import classes from './GroceryItem.module.css';
import deleteIcon from './delete.svg';

const groceryItem = (props) => {
    return (
        <Fragment>
            <div className={classes.GroceryItem}>
                <div className={classes.Data}>
                    <div className={classes.Content}>
                        <div className={classes.Name}>
                            {props.name}
                        </div>
                        <div className={classes.Remarks}>
                            {props.remarks}
                        </div>
                    </div>
                    <div className={classes.Price}>₹{(+props.price).toFixed(2)}</div>
                </div>
                <div className={classes.Delete} onClick={() => props.clickListener(props.id)}>
                    <img src={deleteIcon} alt="delete" />
                </div>
            </div>
        </Fragment>
    );
};

export default groceryItem;