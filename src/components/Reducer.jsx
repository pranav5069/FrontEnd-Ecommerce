import { products, cartItems } from './Data.jsx';
import React from 'react';
import { combineReducers, createStore } from 'redux';


function ProductReducer(state = products, action) {
    return products;
}

function CartReducer(state = cartItems, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let id = action.payload.id;
            let exists = state.some((item) => item.id === id);
            if (!exists) {
                return [...state, { ...action.payload, quantity: 1, totalPrice:1*action.payload.price }]
            }
            else {
                return state.map((item) => {
                    return item.id === id ? { ...item, quantity: item.quantity + 1, totalPrice:(item.quantity + 1)*item.price } : item;
                })
            }
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.id !== action.payload);
        case 'UPDATE':
            return [...state, action.payload]
        case 'INCREMENT_QUANTITY':
            return state.map((item) => {
                return item.id === action.payload ? { ...item, quantity: item.quantity + 1, totalPrice:(item.quantity + 1)*item.price } : item;
            })
        case 'DECREMENT_QUANTITY':
            return state.map((item) => {
                return item.id === action.payload ? { ...item, quantity: item.quantity - 1, totalPrice:(item.quantity - 1)*item.price } : item;
            }).filter((item)=>item.quantity>0)
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    products: ProductReducer,
    cart: CartReducer
});

const store = createStore(rootReducer);

export default store;