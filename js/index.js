const trendingNow = () => {
    const trending = document.getElementById('trending-now')

    // all product api
    const allProductAPI = 'https://fakestoreapi.com/products'
    // all category api
    const allCategoryAPI = 'https://fakestoreapi.com/products/categories'

    const allProduct = fetch(allProductAPI)
        .then(res => res.json())
        .then(data => showAllProduct(data))

    const showAllProduct = (products) => {
        products.forEach(product => {
            console.log(product.title);
        })
    }


}
trendingNow()