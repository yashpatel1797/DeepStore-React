export const filterReducer = (state, dispatch) => {
    switch (dispatch.type) {
        case "SORT_BY_PRICE":
            return { ...state, sortBy: dispatch.payload }
        case "FILTER_BY_RATING":
            return { ...state, selectedRating: dispatch.payload }
        case "FILTER_BY_PRICE_RANGE":
            return { ...state, priceRange: dispatch.payload }
        case "FILTER_BY_CATEGORY":
            return state.selectedCategory.includes(dispatch.payload)
                ? {
                    ...state,
                    selectedCategory:
                        [...state.selectedCategory.filter(item => item !== dispatch.payload)]
                } : { ...state, selectedCategory: [...state.selectedCategory, dispatch.payload] }
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: dispatch.payload }
        case "RESET_ALL_FILTERS":
            return {
                ...state,
                sortBy: "",
                selectedRating: 0,
                priceRange: 1000,
                selectedCategory: [],
                searchQuery: ""
            }
        default:
            return state;
    }
}