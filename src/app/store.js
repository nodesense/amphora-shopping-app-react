// store.js
// create and configure store

import {createStore,
        combineReducers,
        applyMiddleware
    } from 'redux';

import thunk from 'redux-thunk';

import cartReducer from './state/reducers/cartReducer';
import authReducer from './state/reducers/authReducer';

// log all the actions dispatched
function loggerMiddleware({getState, dispatch}) {
    return function(nextFunc) {
        return function (action) {
            // called for every dispatch
            console.log('LOGGER MIDDLEWARE ', action);

            // forward the action to 
                // next middleware
                // or reducer
            const result = nextFunc(action);

            return result;
        }
    }

}

const rootReducer = combineReducers({
    items: cartReducer,
    auth: authReducer
});

const store = createStore(rootReducer,
                          applyMiddleware(loggerMiddleware, thunk));

export default store;