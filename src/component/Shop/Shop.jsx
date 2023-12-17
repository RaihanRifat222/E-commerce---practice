
import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import CalculateCart from '../CalculateCart/CalculateCart';
const Shop = () => {
    const [products, setProducts] = useState ([]);
    const [cart, setCart] = useState ([]);
    const [price, setPrice] = useState ({});
    let productCount = {};
   
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        setPrice(CalculateCart(newCart));

        for (const item of newCart) {
            productCount[item.id] = productCount[item.id]? productCount[item.id] +1 : 1;
        }
    
    }
    return (
        <div className='shop'>
            <div className="product-container">
              

                {products.map(product => <Product key = {product.id} product = {product} handleAddToCart= {handleAddToCart} /> )}
            </div>

            <div className="shopping-cart">
                <h4>Order Summary</h4>
                <p>Selected Items: {price.items}</p>
                <p>Total Price: ${price.totalPrice}</p>
                <p>Total Shipping Charge: ${price.shippingCharge}</p>
                <p>Tax: ${price.tax}</p>
                <h4>Grand Total: ${price.grandTotal}</h4>

               
            </div>
        </div>
    );
};

export default Shop;