import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import { items } from "./items";

const Root = () => {
    const [products, setProducts] = useState(items);
    const [choice, setChoice] = useState(0);
    useEffect(() => {
        setChoice(choice);
        setProducts(products);
    }, [setChoice, products,choice]);
    switch(choice) {
        case 0:
            return <ProductList products={products} setChoice={setChoice}/>;
        case 1:
            return <AddProduct setProducts={setProducts} products={products} setChoice={setChoice}/>
        default:
            return <div>u shouldnt be here</div>
    }
}

export default Root;