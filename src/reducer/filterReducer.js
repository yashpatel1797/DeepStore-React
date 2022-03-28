export const filterReducer = (state, { type, payload }) => {
    switch (type) {
        case "SORT_BY_PRICE":
            return { ...state, sortBy: payload }
        case "FILTER_BY_RATING":
            return { ...state, selectedRating: payload }
        case "FILTER_BY_PRICE_RANGE":
            return { ...state, priceRange: payload }
        case "FILTER_BY_CATEGORY":
            return state.selectedCategory.includes(payload)
                ? {
                    ...state,
                    selectedCategory:
                        [...state.selectedCategory.filter(item => item !== payload)]
                } : { ...state, selectedCategory: [...state.selectedCategory, payload] }
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: payload }
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