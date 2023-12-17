
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    const manufacturerStyle = {
        marginTop: '67px'
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='name'>{name}</p>
            <p className="price">Price: {price}$</p>

            <p className="manufacturer" style={manufacturerStyle}>Manufacturer: {seller}</p>
            <p className="rating">Rating: {ratings} stars</p>
            <button onClick={() => handleAddToCart(props.product)}>Add to Cart 
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;