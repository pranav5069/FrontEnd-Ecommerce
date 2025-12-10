import React, { useState, useEffect } from 'react';
import { cartItems } from './Data';

function TotalPrice({ cartItems = [] }) {
    let [totalCost, setTotalCost] = useState(0);
    let [afterDiscount, setAfterDiscount] = useState(0);
    let [role, setRole] = useState("");

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.totalPrice;
        })
        setTotalCost(total);

        if (role === "Employee") {
            setAfterDiscount(total * 0.9);
        }
        else if (role === "Student") {
            setAfterDiscount(total * 0.75);
        }
        else {
            setAfterDiscount( total);
        }
    }, [cartItems, role])



    // console.log(totalCost);
    // console.log(afterDiscount)
    // console.log(role);


    return (
        <>
            <div className="total-price-section">
                <div>
                    <input type="radio" id="student" name="role" value="Student" onChange={(e) => { setRole(e.target.value) }}></input>
                    <label htmlFor="student">Student</label>

                    <input type="radio" id="employee" name="role" value="Employee" onChange={(e) => { setRole(e.target.value) }}></input>
                    <label htmlFor="employee">Employee</label>

                    <input type="radio" id="other" name="role" value="Other" onChange={(e)=>setRole(e.target.value)}></input>    
                    <label htmlFor="other">Other</label>
                </div>
                <div className="total-price-item">
                    <h3 className="total-price-label">total Cost</h3>
                    <h3 className="total-price-amount">{totalCost}</h3>
                </div>

                <div className="total-price-item">
                    <h3 className="total-price-label">After Discount</h3>
                    <h3 className="total-price-amount discount">{afterDiscount}</h3>
                </div>
            </div>
        </>
    )
}

export default TotalPrice;