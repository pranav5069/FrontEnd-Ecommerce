import React from 'react';
import './ProductItem.css';
import {useSelector,useDispatch} from 'react-redux';

function ProductItem({ productData }) {

    const cartItems = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    // console.log("cart items in card",cartItems);
    
    const { title, price, description, image, category, rating } = productData;

    const shortDesc = description
        ? description.length > 100
            ? description.slice(0, 100) + '...'
            : description
        : 'No description available.';

    
    const onAddCart=()=>{
        dispatch({type:'ADD_TO_CART',payload:productData}); 
    }

    return (
        <div className="card-item" aria-label={title || 'product-card'}>
            {image ? (
                <img src={image} alt={title || 'product image'} className="card-item__image" />
            ) : (
                <div className="card-item__image card-item__image--placeholder">No image</div>
            )}

            <div className="card-item__info">
                <div className="card-item__header">
                    <h3 className="card-item__title">{title || 'Untitled product'}</h3>
                    {category && <div className="card-item__category">{category}</div>}
                </div>

                <p className="card-item__description">{shortDesc}</p>

                <div className="card-item__footer">
                    <div className="card-item__price">{price !== undefined ? `$${price}` : '—'}</div>
                    <button className="card-item__button" type="button" onClick={()=>onAddCart()}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;