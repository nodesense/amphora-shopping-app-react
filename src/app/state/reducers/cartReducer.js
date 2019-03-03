import * as ActionTypes from '../action-types';

const INITIAL_STATE = []; // default state

// reducer method, implement the actions
// state is coming from store
// action is coming from dispatch(action)
// return a new state, immutable, pure function
// very first time, dispatch invoked, combineReducer to initialize state
// for every dispatch
export default function cartReducer(state = INITIAL_STATE,
                                   action) {
    console.log('cartReducer state', state, 'action', action);

    switch(action.type) {
        case ActionTypes.ADD_ITEM: {
            return [...state, action.payload.item]
        }

        case ActionTypes.REMOVE_ITEM: {
            return state.filter ( item => item.id !== action.payload.id)
        }
        case ActionTypes.UPDATE_ITEM: {
            // clone the array
            return state.map (item => {
                            if (item.id === action.payload.id) {
                                // clone the item object
                                return {...item, qty: action.payload.qty} // qty: qty
                            }
                             return item;
                            })
        }

        case ActionTypes.EMPTY: {
            return [];
        }

        default: 
            return state;
    }
}