
import './Product.css'
const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;

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
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;