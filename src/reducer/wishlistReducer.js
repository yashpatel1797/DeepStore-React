export const wishlistReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TO_WISHLIST":
            return { ...state, wishlistItem: [...state.wishlistItem, payload] };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, wishlistItem: state.wishlistItem.filter(item => item.id !== payload.id) }
        default:
            return state
    }
}

