export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cartItem: [...state.cartItem, { ...payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            return { ...state, cartItem: state.cartItem.filter((item) => item.id !== payload.id) }
        case "INCREASE_CART_QUANTITY":
            return { ...state, cartItem: state.cartItem.map((item) => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item) }
        case "DECREASE_CART_QUANTITY":
            return { ...state, cartItem: state.cartItem.map((item) => item.id === payload.id ? { ...item, qty: item.qty - 1 } : item) }
        case "FETCH_PRODUCTS_DATA":
            return { ...state, productsData: payload }
        case "FETCH_CART_DATA":
            return { ...state, cartItem: payload }
        default:
            return state;
    }
}

