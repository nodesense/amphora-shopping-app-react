// CartSummary.js
import React, {Component, useState} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
export default class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

    // called only on update cycle, not on creation cycle
    // use this to stop render function call only on update cycle
    // called whenever parent render called on update cycle
    // called whenever we do this.setState on update cycle
    /// NOT CALLEd when forceUpdate called
    // return true if we need to render the data [render called]
    // return false if no need to render the data [render not called]
    shouldComponentUpdate(nextProps, nextState) {
        console.log('CartSummary shouldComponentUpdate called');
        console.log('current props', this.props);
        console.log('current state', this.state);
        console.log('nextProps ', nextProps);
        console.log('nextState', nextState);

        const canRender = this.props.amount != nextProps.amount ||
                          this.props.count != nextProps.count ||
                          this.state.discount != nextState.discount ||
                          this.state.grandTotal != nextState.grandTotal;

        console.log('CartSummary canRender', canRender)
        return canRender
    }

    static recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        return {
            discount, 
            grandTotal
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('CartSummary getDerivedStateFromProps', props,
                    'state', state)
        
        const newState = CartSummary.recalculate(props);
        return newState;

        // return CartSummary.recalculate(props);
    }
     

    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


// to be used if parent component doesn't pass data
CartSummary.defaultProps = {
    amount: 0
}

// propstypes assignment
CartSummary.propTypes = {
    
}