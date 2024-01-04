
import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import getShoppingCart from '../CalculateCart/GetShoppingCart';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState ([]);
    const [cart, setCart] = useState ([]);
    const [productCount, setProductCount] = useState(localStorage.getItem('productCount') ? JSON.parse(localStorage.getItem('productCount')) : {});
    // const productCount = localStorage.getItem('productCount') ? JSON.parse(localStorage.getItem('productCount')) : {};
    useEffect(() => {
        let previousCart = getShoppingCart();
        if (previousCart){
            const prevProducts = products.filter(product => {
                for (const id in previousCart) {
                    if (product.id === id) {
                        product.quantity = previousCart[id];
                       
                        return true;
                    }
                }
                return false;
            });
            setCart(prevProducts);
          
        }
    }, [products]);
    
    

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    
    useEffect(() => {
        

        for (const item of cart) {
            const id = item.id;
            const quantity = item.quantity;
            productCount[id] = quantity;
        }
        
        localStorage.setItem('productCount', JSON.stringify(productCount));
    }, [cart]);

 
    const handleAddToCart = (product) => {
        
        
        let newCart = [];
        
        let exist = false;
        for (const item of cart) {
            if (item.id === product.id){
               
                item.quantity = item.quantity + 1;
                exist = true;
                setCart([...cart]);
            }
            
        }

        if (!exist){
            product.quantity = 1;
            newCart = [...cart, product];
            setCart(newCart);
        }

        
        
    }

    const clearCart = () => {
        setProductCount({});
        localStorage.setItem('productCount', JSON.stringify({}));
        setCart([]);
        // window.location.reload();
    }
    return (
        <div className='shop'>
            <div className="product-container">
              

                {products.map(product => <Product key = {product.id} product = {product} handleAddToCart= {handleAddToCart} /> )}
            </div>

            
            <div className="cart-container">
            <Cart cart= {cart} clearCart={clearCart}> 
            <Link to='/order'> 
            <button className="review-btn">Review Order
            </button>
            </Link>
            </Cart>

               
            </div>
        </div>
    );
};

export default Shop;