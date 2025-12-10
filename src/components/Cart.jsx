import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CardItem from './ProductItem'
import './Cart.css';

import TotalPrice from './TotalPrice';

function Cart() {
    const cartItems = useSelector((state) => state.cart);
    console.log("innnn",cartItems);
    const dispatch = useDispatch();
    // let [finalCartItems, setFinalCartItems] = useState([]);

    // useEffect(() => {
    //     let updatedList = [];
    //     cartItems.map((item) => {
    //         const exists = updatedList.find((item1) => item1.id === item.id);
    //         if (exists) {
    //             updatedList = updatedList.map((c) => {
    //                 return exists.id === c.id ? { ...c, quantity: c.quantity + 1, totalPrice: (c.quantity + 1) * item.price } : c;
    //             })
    //         }
    //         else {
    //             updatedList.push({ ...item, totalPrice: 1 * item.price })
    //         }
    //     })

    //     setFinalCartItems(updatedList);
    // }, [cartItems])

    // console.log(finalCartItems)




    const onPlusProduct = (id) => {
        dispatch({type:"INCREMENT_QUANTITY",payload:id});
        // setFinalCartItems(prevList=>prevList.map((item) => {
        //     dispatch({type:"UPDATE",payload:{...item, quantity: item.quantity + 1}})
        //     return item.id === id ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.price } : item;
        // }))

    }

    const onMinusProduct = (id) => {
        dispatch({type:"DECREMENT_QUANTITY",payload:id});


        // let updatedList = [];
        // setFinalCartItems(prevList => {
        //      updatedList= prevList.map((item) => {
        //         dispatch({type:"UPDATE",payload:{...item, quantity: item.quantity - 1}})
        //         return item.id === id ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price } : item;
        //     }).filter((item) => item.quantity > 0);

        //     return updatedList;
        // })


        const stillExists = cartItems.some(item => item.id === id);
        if (!stillExists) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: id });
            console.log(cartItems);
        }

        
    }

    // console.log(finalCartItems);
    return (
        <>
            <div className="cart-wrapper">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>title</th>
                            <th className="qty">quantity</th>
                            <th className="price">price</th>
                            <th className="total-price">totalPrice</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.title} /></td>
                                <td>{item.title}</td>
                                <td className="qty-container">
                                    <button className="qty-btn minus" onClick={() => onMinusProduct(item.id)}>-</button>
                                    <span className="qty">{item.quantity}</span>
                                    <button className="qty-btn plus" onClick={() => onPlusProduct(item.id)}>+</button>
                                </td>
                                <td className="price">{item.price}</td>
                                <td className="total-price">{item.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <TotalPrice cartItems={cartItems} />
            </div>
        </>
    )
}

export default Cart;