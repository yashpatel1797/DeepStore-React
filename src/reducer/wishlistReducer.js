export const wishlistReducer = (state, dispatch) => {
    switch (dispatch.type) {
        case "ADD_TO_WISHLIST":
            return { ...state, wishlistItem: [...state.wishlistItem, dispatch.payload] };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, wishlistItem: state.wishlistItem.filter(item => item.id !== dispatch.payload.id) }
        default:
            return state
    }
}

