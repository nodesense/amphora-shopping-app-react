// ReduxCart.js

// Example only, not for production
// right coupling of React + Redux

import React, {Component} from "react";
import PropTypes from "prop-types";
import CartList from "./CartList";

import store from '../store';
import * as actions from '../state/actions';
import {bindActionCreators} from 'redux';

const wrappedActions = bindActionCreators(actions, store.dispatch);


export default class ReduxCart extends Component {
    constructor(props) {
        super(props);
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        // use action creators to create action
        const action = actions.addItem(item);
        console.log('dispatching action ', action);
         // dispatch the action, calls reducer
         // update the new state in the store
         store.dispatch(action)

         const state = store.getState();
         console.log('Current State is ', state);
    }
     
    removeItem = (id) => {
        //TODO
        store.dispatch(actions.removeItem(id));
    }
 

    updateItem = (id, qty) => {
         
        // const action = actions.updateItem(id, qty);
        // store.dispatch(action);

        // OR

        // create a wrapper function
        // you call wrapperFunc(id, qty)
            // action =  wrapperFunc calls action creator with id, qty
            // dispatch the action dispatch(action)
        // const wrapperFunc = bindActionCreators(actions.updateItem,
        //                                          store.dispatch);
        // wrapperFunc(id, qty); // create action and dispatch also

        // OR 

        // Wrap all the actions method, addItem, removeItem.....
        // return an object of actions wrapper
        wrappedActions.updateItem(id, qty);
    }

    empty = () => {
        // bindActionCreators
        wrappedActions.empty();
    }
   
    componentDidMount() {

        console.log('componentDidMount, subscribe for store update')
        // subscribe for store update
        this.unsubscribeFunc = store.subscribe( () => {
            console.log('Subscribe called for ReduxCart');
            this.forceUpdate(); // let react to call render
        })

    }

    componentWillUnmount() {
        // unsubscribe from store update
        this.unsubscribeFunc();
        console.log('componentWillUnmount unsubscribe from store update');
    }
    
    render() {
        console.log("ReduxCart render")

        const state = store.getState();

        return (
            <div> 
            <h2>Redux Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={state.items}
                        removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

           

            </div>
        )
    }
} 


ReduxCart.defaultProps = {
    
}

ReduxCart.propTypes = {
    
}