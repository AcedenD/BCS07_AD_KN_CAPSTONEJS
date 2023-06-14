console.log("Hii!");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('productid');
console.log("id: ", id)

const getProductDetail = async (idProduct) => {
    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
        method: 'GET',
        responseType: "json",
    })

    promise.then(function (res) {
        let detailArr = res.data.content;
        console.log("detailArr: ", detailArr);
        document.getElementById('image').src = detailArr.image;
        document.getElementById('shoes_name').innerHTML = detailArr.name;
        document.getElementById('description').innerHTML = detailArr.description;
        document.getElementById('price').innerHTML = `$${detailArr.price}`;
        document.getElementById('size').innerHTML = renderListSize(detailArr.size);
        document.getElementById('quantity').value = detailArr.quantity;
        document.getElementById('products_display').innerHTML = renderRelatedProduct(detailArr.relatedProducts);



    })
    promise.catch(function (err) {
        console.log(err);
    })
}
getProductDetail(id);

// size 
const renderListSize = (size) => {
    let content = '';
    for (let i = 0; i < size.length; i++) {
        content += `
        <option value=${size[i]}>${size[i]}</option>
        `
    }
    return content;
}
// Related products
const renderRelatedProduct = (arr) => {
    let content = '';
    for (let i = 0; i < arr.length; i++) {
        content += `
        <div class="col-lg-4 col-md-6 col-6 d-flex justify-content-center">
    <div class="card rounded-4">
      <a href="./detail.html?productid=${arr[i].id}" class="m-3"><img src="${arr[i].image}" class="card-img-top rounded-4" alt="test"></a>
      <div class="card-body text-center">
        <a href="./detail.html?productid=${arr[i].id}">
          <h5 class="card-title">${arr[i].name}</h5>
        </a>
        <p class="card-text">${arr[i].shortDescription}</p>
        <h3 class="card-text">$ ${arr[i].price}</h3>
        <i class="fa fa-cart-shopping" id="cart_btn"></i>
      </div>
    </div>
  </div>
        `
    }
    return content;
}