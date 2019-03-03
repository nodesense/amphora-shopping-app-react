// FuncCart.js

import React, {Component} from "react";
import PropTypes from "prop-types";
import CartList from "./CartList";
import CartSummary from './CartSummary';

// production

export default function FuncCart(props) {
        console.log("FuncCart render", props)


        return (
            <div> 
            <h2>Func Cart</h2>

            <button onClick={props.addItem}>
                Add Item
            </button>


            <button onClick={props.cartDispatchers.empty}>
                Empty
            </button>


            <CartList  items={props.items}
                        removeItem={props.removeItem}
                       updateItem={props.cartDispatchers.updateItem}
            />

            <CartSummary amount={props.amount}
                         count={props.count} />

           

            </div>
        )
    }



FuncCart.defaultProps = {
    
}

FuncCart.propTypes = {
    
}