
import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState ([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    
    return (
        <div className='shop'>
            <div className="product-container">
              

                {products.map(product => <Product key = {product.id} product = {product}/> )}
            </div>

            <div className="shopping-cart">
                <h1>Order Summary</h1>
                <h3>Items Ordered: </h3>
            </div>
        </div>
    );
};

export default Shop;