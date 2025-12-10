import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ProductItem from './ProductItem.jsx';
import './Products.css';

function Products() {

    const productList1 = useSelector((state)=>state.products);
    const [filtered,setFiltered] = useState(productList1);
    const dispatch = useDispatch();
    // console.log("before search",productList1);
   
    const [searchTerm, setSearchTerm] = useState("");

    const onChangeSearch = (e) =>{
        const value= e.target.value;
        setSearchTerm(value);
        setFiltered(productList1.filter((product)=>{
            return product.title.includes(value);
        }));
        
        console.log(searchTerm);
        
    }

    const onClickSearch=()=>{
        console.log(searchTerm)
        setFiltered(productList1.filter((product)=>{
            return product.title.includes(searchTerm);
        }));
        // console.log("after search",productList1);

    }

    

    return (
        <div className="products-container">
            <div className="products-search-wrapper">
                <input type="text" className="products-search" placeholder='Search products...' value={searchTerm} onChange={onChangeSearch} 
                onKeyDown={(e) => {
                        e.key === "Enter" && onClickSearch()
                    }}></input>
                <button type="button" className="products-search-btn" onClick={()=>onClickSearch()}>Search</button>
            </div>
            <div className="products-grid">
                {filtered.map((product)=>(
                    <ProductItem key={product.id} productData={product}/>
                ))}
            </div>
        </div>
    )
}

export default Products;