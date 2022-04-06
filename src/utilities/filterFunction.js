/**
 * 
 * @param {array} productsData products array of object
 * @param {string} sortBy sort type
 * @param {number} selectedRating rating value
 * @param {number} priceRange price range value
 * @param {array} selectedCategory array contains selected category
 * @param {string} searchQuery search string
 * @returns 
 */
const filterFunction = (productsData, sortBy, selectedRating, priceRange, selectedCategory, searchQuery) => {
    let filteredProducts = productsData;

    if (sortBy) {
        filteredProducts = filteredProducts.sort((a, b) => sortBy === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price)
    }

    if (selectedRating) {
        filteredProducts = filteredProducts.filter(item => Number(item.rating.rate) >= selectedRating)
    }
    if (priceRange) {
        filteredProducts = filteredProducts.filter(item => Number(item.price) <= priceRange)
    }
    if (selectedCategory.length !== 0) {
        filteredProducts = filteredProducts.filter((item => selectedCategory.includes(item.category)))
    }

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(item =>
            item.title.toLowerCase().includes(searchQuery)
        );
    }
    return filteredProducts;
}

export { filterFunction }