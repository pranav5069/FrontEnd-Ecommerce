import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './ProductItem.jsx';
import './Products.css';
import axios from 'axios';

function Products() {

    const productList1 = useSelector((state) => state.products);
    const [filtered, setFiltered] = useState(productList1);
    const dispatch = useDispatch();
    const [price, setPrice] = useState("asc");
    // console.log("before search", productList1);
    // console.log("filtered", filtered);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function fetchData(url) {
            let apiData = await axios.get(url)
                .then((data) => data)
                .catch((err) => console.log("error"))
            // console.log("after json parsing ", apiData.data);
            dispatch({ type: 'ADD_DATA', payload: apiData.data });
        }
        fetchData("https://fakestoreapi.com/products");
    }, [])

    useEffect(() => {
        // console.log("before filtered data addition ", productList1);
        let sortedItems = [...productList1];
        sortedItems.sort((a, b) => a.price - b.price);
        setFiltered(sortedItems)
        // console.log("filtered", filtered);
    }, [productList1])



    const onChangeSearch = (e) => {
        const value = e.target.value;
        console.log(value);
        setSearchTerm(value);
        setFiltered(productList1.filter((product) => {
            console.log(product.title);
            return product.title.includes(value);
        }));

        // console.log(searchTerm);

    }


    const onClickSearch = () => {
        console.log(searchTerm)
        setFiltered(productList1.filter((product) => {
            return product.title.includes(searchTerm);
        }));
        // console.log("after search",productList);

    }

    const onPriceFilter = (order) => {
        let value = order;
        let sortedList = [...filtered]

        if (value === "asc") {
            sortedList = sortedList.sort((a, b) => a.price - b.price);
        }
        else if (value === "des") {
            sortedList = sortedList.sort((a, b) => b.price - a.price)
        }
        setFiltered(sortedList);
    };


    return (
        <div className="products-container">
            <div className="products-search-wrapper">
                <input type="text" className="products-search" placeholder='Search products...' value={searchTerm} onChange={onChangeSearch}
                    onKeyDown={(e) => {
                        e.key === "Enter" && onClickSearch()
                    }}></input>
                <button type="button" className="products-search-btn" onClick={() => onClickSearch()}>Search</button>

                
                <select onChange={(e) => onPriceFilter(e.target.value)} className="dropDown">
                    <option value="asc" >ascending</option>
                    <option value="des" >descending</option>
                </select>
            </div>
            <div className="products-grid">
                {filtered !== undefined && filtered.map((product) => {
                    return <ProductItem key={product.id} productData={product} />
                })}
            </div>
        </div>
    )
}

export default Products;