// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 1}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:

        // create new array, shallow copy items, add new item at end
        const items = [...this.state.items, item];
        this.setState({
            items // es6 style, instead of items: items
        })

 
    }
    
    // child to parent communication
    // passing a parent function to child as props
    // child calls the function as callback
    removeItem = (id) => {
        //TODO
        // return all the items except the one !== id
        // return new array, immutable
        const items = this.state.items
                                .filter(item => item.id !== id);

        this.setState({items});
    }

    // array of items
    // 1. item modifying item within the array. {...item}, need a clone item
    // 2. items clone of the array

    updateItem = (id, qty) => {
        //TODO
        // clone the array of items, shallow copy
        const items = this.state.items
                                .map (item => {
                                    if (item.id === id) {
                                        // update this item.qty here
                                        // immutability 
                                        return {...item, qty} // qty: qty
                                    }

                                    return item;
                                })

        this.setState({
            items
        })
    }

    empty = () => {
        //TODO
         const items = [];
         this.setState({
                items
         });
    }

    //dummy
    refresh = () => {
        // trigger render method
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    //componentWillMount

    // called before calling render method
    // called on creation and update cycle, setState
    // should return new state
    static getDerivedStateFromProps(props, state) {
        console.log('Cart getDerivedStateFromProps', props, state);

        let count = 0, 
        amount = 0;

        for (let item of state.items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        // returning new derived state
        // new data is updated into state
        // calls render
        console.log('new state ', count, amount)
        return {
            count, // es6, count: count
            amount // es6, amount: amount
        }
    }
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

            <CartSummary  amount={this.state.amount}
                          count={this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}