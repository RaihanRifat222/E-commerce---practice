
import CalculateCart from "../CalculateCart/CalculateCart";
import './Cart.css';
const Cart = (props) => {

    const {cart,clearCart, children} = props;

    const price = CalculateCart(cart);

    // const clearCart = () => {
    //     localStorage.removeItem('productCount');
    //     window.location.reload();
    // }

    return (
        <div className="cart">
            <div className="shopping-cart">
                <h4>Order Summary</h4>
                <p>Selected Items: {price.items}</p>
                <p>Total Price: ${price.totalPrice}</p>
                <p>Total Shipping Charge: ${price.shippingCharge}</p>
                <p>Tax: ${price.tax}</p>
                <h4>Grand Total: ${price.grandTotal}</h4>

               
            </div>

            <div className="buttons">
                <button className="clear-btn" onClick={()=>clearCart()}>Clear Cart</button>
                
                {children}
            </div>
        </div>
    );
};

export default Cart;