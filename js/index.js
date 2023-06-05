console.log("hello world");

function getAllShoes() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  })

  promise.then(function(res) {
    let shoesArr = res.data.content
    console.log(shoesArr);
    renderShoes(shoesArr)
  })

  promise.catch(function(err) {
    console.log(err);
  })
}

// getAllShoes();

function renderShoes(shoesArr) {
  var content = "";
  for(let i = 0; i < shoesArr.length/2; i++){
    console.log(shoesArr[i]);
    content += `
    <div class="col-lg-4 col-md-6 d-flex justify-content-center">
    <div class="card" style="width: 30rem">
      <img src="${shoesArr[i].image}" class="card-img-top" alt="test">
      <div class="card-body text-center">
        <h5 class="card-title">${shoesArr[i].name}</h5>
        <p class="card-text">${shoesArr[i].shortDescription}</p>
        <h3 class="card-text">$ ${shoesArr[i].price}</h3>
        <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
    </div>
  </div>`
  }
  document.getElementById("products_display").innerHTML = content;

}

