// authReducer.js
import * as ActionTypes from '../action-types';

const INITIAL_STATE = {
    authenticated: false,
    user: {}
}

export default function authReducer(state = INITIAL_STATE, action){
    console.log('authReducer state', state, 'action', action);


    switch(action.type) {
        case ActionTypes.LOGGED_IN: {
            return {...state, 
                    authenticated: true,
                    user: action.payload.user
                }
        }

        case ActionTypes.LOGGED_OUT: {
            return {...state, 
                authenticated: false,
                user: {}
            }
        } 

        default: 
            return state;
    }

}