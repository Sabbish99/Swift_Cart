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
        const justThreeProduct = products.slice(0, 3)
        trending.innerHTML = ''
        justThreeProduct.forEach(product => {

            // console.log(product);
            const div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `
           <div class="mb-20 trending-grid">
                <div class="  shadow-lg rounded-xl max-h-screen ">
                    <div class="flex justify-center items-center bg-gray-300 trending-img">
                        <img class="product-image" src="${product.image}">
                    </div>
                    <div class="p-4">
         
                        <div class=" flex justify-between items-center ">
                            <p class="p-2 rounded-sm  text-blue-700 font-semibold bg-blue-300 text-xs">
                                ${product.category}
                            </p>
                            <p><i class="fa-solid fa-star text-yellow-500"></i> ${product.rating.rate} (${product.rating.count})</p>
                        </div>

      
                        <div class= " p-2 mt-2">
                            <h4 class = "font-semibold my-2">${product.title}</h4>
                            <h3 class="font-bold text-lg">$${product.price}</h3>
                        </div>
                        <div class="flex justify-between my-3">
                            <button class="detail-btn"><i class="fa-regular fa-eye"></i> Details</button>
                            <button class="add-cart-btn"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                        </div>
                    
                    </div>
            </div>
           </div>
            
            
            `
            trending.append(div)

        })

    }


}
trendingNow()