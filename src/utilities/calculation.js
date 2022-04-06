/**
 * 
 * @param {array} cartItem array of cart object
 * @returns sum, discount price
 */
const calculatePrice = (cartItem) =>
    cartItem.reduce((totalPrice, product) => {
        return {
            sum: Number(product.original_price) * Number(product.qty) + Number(totalPrice.sum),
            discount: (Number(product.original_price) * Number(product.discount)) * Number(product.qty) / 100 + Number(totalPrice.discount)
        };
    }, { sum: 0, discount: 0 });

/**
 * 
 * @param {object} price price object which has sum and discount
 * @param {number} deliveryCharges  
 * @returns final calculated price
 */
const calculateFinalPrice = (price, deliveryCharges = 0) => {
    return price.sum + deliveryCharges - price.discount
}
/**
 * 
 * @param {number} totalPrice 
 * @returns delivery charge based on total price
 */
const calculateDeliveryCharges = (totalPrice) => (totalPrice.sum > 200 ? 0 : 99);

const getPriceAfterCoupon = (coupon, finalPrice) => {
    if (coupon) {
        return coupon === "50OFF" ? finalPrice - 50 : finalPrice - finalPrice * 0.1
    }
    return finalPrice
}


export { calculatePrice, calculateFinalPrice, calculateDeliveryCharges, getPriceAfterCoupon }