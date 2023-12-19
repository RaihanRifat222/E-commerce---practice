

const CalculateCart = (products) => {
    let items = 0;
    let totalPrice = 0;
    products.forEach(product => {
        items+= product.quantity;
        totalPrice += (product.price* product.quantity);
    });

    let shippingCharge = 5;

    let tax = totalPrice * 0.1;

    let grandTotal = totalPrice + shippingCharge + tax;

    let price = {
        items: items,
        totalPrice: totalPrice,
        shippingCharge: shippingCharge,
        tax: tax.toFixed(2),
        grandTotal: grandTotal
    }

    return price;
};

export default CalculateCart;