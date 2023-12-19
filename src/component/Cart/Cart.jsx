
import CalculateCart from "../CalculateCart/CalculateCart";
import './Cart.css';
const Cart = (props) => {

    const {cart} = props;
    const price = CalculateCart(cart);

    return (
        <div>
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

export default Cart;