const trendingNow = () => {

    // all product api
    const allProductAPI = 'https://fakestoreapi.com/products'
    // all category api
    const allCategoryAPI = 'https://fakestoreapi.com/products/categories'

    const allProduct = fetch(allProductAPI)
        .then(res => res.json())
        .then(data => showAllProduct(data))

    const showAllProduct = (products) => {
        const trending = document.getElementById('trending-now')
        trending.innerHTML = ''
        products.forEach(product => {
            // console.log(product);
            const div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `
            <h1 class="border">hehehe added</h1>
            
            `
            trending.append(div)
        })

    }


}
trendingNow()