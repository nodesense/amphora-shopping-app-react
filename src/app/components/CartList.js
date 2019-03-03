// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

 // PureComponent is drived from Component
 // PureComponent implements shouldComponentUpdate method
 // it compare nextProps with currentProps
 // nextState with current state, return false/true
export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items, 
             removeItem, 
             updateItem } = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    
                    {
                        items.map( item => (
                                <CartItem item={item}
                                          key={item.id}
                                          removeItem={removeItem}
                                          updateItem={updateItem}
 
                                />
                            ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

// keyword
CartList.defaultProps = {
    items: []
}


// keyword
CartList.propTypes = {
    items: PropTypes.array.isRequired, // mandatory
}