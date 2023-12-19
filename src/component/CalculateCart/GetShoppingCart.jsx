const getShoppingCart = () => {
    let productCount = localStorage.getItem('productCount');
    
    productCount = JSON.parse(productCount);

    return productCount;
}


export default getShoppingCart;