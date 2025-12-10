import React from 'react';

function CartItem({productData={}}){
    const { title, price, description, image, category, rating } = productData;

    return(
        <div>
            <img src={image}></img>
            <p>{title}</p>
            <p>1</p>
            <p>{price}</p>
        </div>
    )
}

export default CartItem;