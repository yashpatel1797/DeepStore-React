const filterFunction = (productsData, sortBy, selectedRating, priceRange, selectedCategory, searchQuery) => {
    let filteredProducts = productsData;

    if (sortBy) {
        filteredProducts = filteredProducts.sort((a, b) => sortBy === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price)
        console.log(filteredProducts);
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

export default filterFunction