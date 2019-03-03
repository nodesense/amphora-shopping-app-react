// actions.js

import * as ActionTypes from './action-types';

import * as api from './api';

// action creators, help to create action object

// ES5 function
// returns object as action
export function addItem(item) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {item}
    }
}

// ES6 function, block statement, return keyword
export const removeItem = (id) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {id}
    }
}

// ES6 single line function 
export const updateItem = (id, qty) => ({
                                type: ActionTypes.UPDATE_ITEM,
                                payload: {id, qty}
                            })

//ES6 with single line
export const empty = () => ({
    type: ActionTypes.EMPTY
})

export const loggedIn = (user) => ({
    type: ActionTypes.LOGGED_IN,
    payload: {user}
})

export const loggedOut = () => ({
    type: ActionTypes.LOGGED_OUT
})

// return function as action
// returned function shall implement async code
// pull data from web service
export function login(username, password) {
    // returning function as action
    // this function is invoked by thunk middleware
    return async function auth(dispatch, getState) {
            // async code
            console.log('called by thunk, sending request')

            try {
                const result = await api.authenticate(username, password);
                console.log('auth result', result);

                const action = loggedIn(result.identity);
                dispatch(action);
            }catch(error) {
                console.log('auth error', error);
            }
    }
}