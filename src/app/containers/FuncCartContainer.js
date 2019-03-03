// FuncCartContainer.js
import {connect} from 'react-redux';

import FuncCart from '../components/FuncCart';
import * as actions from '../state/actions';
import {bindActionCreators} from 'redux';

// bridge React and Redux here
// FuncCart needs items, amount and count as props - getState
// amount and count -- derived data
// FuncCart needs addItem, removeItem, empty and updateItem as props - dispatch

// returns all the properties (data) needed for component
// take data (state) from redux store
// param state == store.getState(), getState is invoked by container
// who calls this method? container will invoke this function
// when? 
//  1. very first time when component created
// 2.  after every dispatch [container will susbcribe automatically]
function mapStateToProps(state) {
    return {
        items: state.items,
        amount: 0,
        count: 0
    }
}

// return all the properties which are functions needed for component
// dispatch == store.dispatch
// getState == store.getState
// who calls this method? container shall call
// when? 
//   1. very first time when component created
function mapDispatchToProps(dispatch, getState) {
    return {
        addItem: function () {
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            const action = actions.addItem(item);
            dispatch(action);
        },

        removeItem: bindActionCreators(actions.removeItem, dispatch),

        // addItem, removeItem, updateItem....
        // props.cartDispatchers.updateItem
        cartDispatchers: bindActionCreators(actions, dispatch)
    }

}


// where is store?
// store is passed to container as React Context

// create container

const connectDecoratorFunc = connect(mapStateToProps,
                                    mapDispatchToProps);

// Create container component, return the container component
// Containers are pure component
// will not render function if no props/state change
// calls render only if items/amount/count changed
// container subscribe, unsubscribe
// Smart component, Presenter component
const CartContainer = connectDecoratorFunc(FuncCart);

export default CartContainer;