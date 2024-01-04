
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Order.css'
import CartPreview from '../CartPreview/CartPreview';
import { useState } from 'react';
const Order = () => {
   
    const products = useLoaderData();

    const getProductsFromLocalStorage = () => {
        let cart = [];
        const productCount = localStorage.getItem('productCount') ? JSON.parse(localStorage.getItem('productCount')) : {};
        
        for (const id in productCount){
            const product = products.filter( product => product.id === id);
            product[0].quantity = productCount[id];
            cart.push(product[0]);
        }
        return cart;
    }


    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('productCount')));

    const increaseProduct = (item) => {
      

       item.quantity = item.quantity + 1;
      
        for (const id in cart){
            if (id === item.id){
                cart[id] = item.quantity;
            }
        }
        setCart({...cart});
        localStorage.setItem('productCount', JSON.stringify(cart));
        
    }

    const decreaseProduct = (item) => {
        if (item.quantity > 0) item.quantity = item.quantity - 1;
        for (const id in cart){
            if (id === item.id){
                cart[id] = item.quantity;
            }
        }
        setCart({...cart});
        localStorage.setItem('productCount', JSON.stringify(cart));
      
   }

   const deleteProduct = (item) => {
    console.log(item);
    for (const id in cart){
        
        if (id === item.id){
           
            delete cart[id];
            console.log(cart);
        }
    }
    setCart({...cart});
    localStorage.setItem('productCount', JSON.stringify(cart));
    window.location.reload();
}

    const clearCart = () => {
       
        localStorage.removeItem('productCount');
        setCart([]);
        // window.location.reload();
    }
    return (
        <div className='order-container mt-20 flex'>
            <div className="preview-container">
                <CartPreview cart={getProductsFromLocalStorage()} increaseProduct={increaseProduct} decreaseProduct={decreaseProduct} deleteProduct={deleteProduct}></CartPreview>
            </div>
            <div className="m-32 bg-orange-200 h-1/2 right-14 top-8  ">
                <Cart cart= {getProductsFromLocalStorage()} clearCart={clearCart}>
                    <button className="review-btn">Proceed to Checkout</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Order;