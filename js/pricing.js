console.log("hello world");

var shoesArr = [];


function getAllShoes() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  })

  promise.then(function (res) {
    shoesArr = res.data.content
    console.log(shoesArr);
    sortShoeByPrice();
    renderShoes(shoesArr)

  })

  promise.catch(function (err) {
    console.log(err);
  })
}

getAllShoes();

function renderShoes(shoesArr) {
  var content = "";
  for (let i = 0; i < shoesArr.length; i++) {
    content += `
    <div class="col-lg-4 col-md-6 col-6 d-flex justify-content-center">
    <div class="card rounded-4">
      <a href="./detail.html?productid=${shoesArr[i].id}" class="m-3" onclick="(function() {
        console.log('id from img: ${shoesArr[i].id}') })()"><img src="${shoesArr[i].image}" class="card-img-top rounded-4" alt="test"></a>
      <div class="card-body text-center">
        <a href="./detail.html?productid=${shoesArr[i].id}" onclick="(function() {
          console.log('id from name: ${shoesArr[i].id}') })()">
          <h5 class="card-title">${shoesArr[i].name}</h5>
        </a>
        <p class="card-text">${shoesArr[i].shortDescription}</p>
        <h3 class="card-text">$ ${shoesArr[i].price}</h3>
        <i class="fa fa-cart-shopping" id="cart_btn"></i>
      </div>
    </div>
  </div>`
  }
  document.getElementById("products_display").innerHTML = content;

}


function sortShoeByPrice() {
  console.log("sorting shoes by price");
  shoesArr.sort(function (a, b) {
    return a.price - b.price;
  })
}