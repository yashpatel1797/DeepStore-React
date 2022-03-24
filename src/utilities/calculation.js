const calculatePrice = (cartItem) =>
    cartItem.reduce((totalPrice, product) => {
        return {
            sum: Number(product.original_price) * Number(product.qty) + Number(totalPrice.sum),
            discount: (Number(product.original_price) * Number(product.discount)) * Number(product.qty) / 100 + Number(totalPrice.discount)
        };
    }, { sum: 0, discount: 0 });
const calculateFinalPrice = (price, deliveryCharges = 0) => {
    return price.sum + deliveryCharges - price.discount
}
const calculateDeliveryCharges = (totalPrice) => (totalPrice > 200 ? 0 : 99);

export { calculatePrice, calculateFinalPrice, calculateDeliveryCharges }