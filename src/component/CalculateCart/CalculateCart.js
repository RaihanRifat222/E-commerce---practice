

const CalculateCart = (products) => {
    let items = products.length;
    let totalPrice = 0;
    products.forEach(product => {
        totalPrice += product.price;
    });

    let shippingCharge = 5;

    let tax = totalPrice * 0.1;

    let grandTotal = totalPrice + shippingCharge + tax;

    let price = {
        items: items,
        totalPrice: totalPrice,
        shippingCharge: shippingCharge,
        tax: tax,
        grandTotal: grandTotal
    }

    return price;
};

export default CalculateCart;