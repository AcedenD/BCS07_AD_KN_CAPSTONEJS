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


function getShoesByCategories(idCategories){
  console.log("getting shoes by categories: " + idCategories);

  let shoesByCategories = [];

  if(idCategories !== "ALL"){

    shoesByCategories = shoesArr.filter(function(shoes){
    let catObj = JSON.parse(shoes.categories);
    return catObj[0].id == idCategories || catObj[1].id == idCategories || catObj[2].id == idCategories;
  });
  }else {
    shoesByCategories = shoesArr;
  }

  // console.log(shoesByCategories);

  renderShoes(shoesByCategories);

  // for(let i = 0; i < shoesArr.length; i++){
  //   let shoe = shoesArr[i];
  //   let catObj = JSON.parse(shoe.categories);
  //   console.log(shoe.id + ":" + catObj[0].id + ":" + catObj[1].id + ":" + catObj[2].id);
  // }

  // let tempArr = shoesArr.filter(function(shoes){
  //   // return shoes.catergoies.id == idCaterogies;
  // });


  // renderShoes(tempArr);
}

// getShoesByCaterogies('adidas');

let btnArr = document.querySelectorAll(".btn");
console.log(btnArr);

for(let i = 0; i < btnArr.length; i++){
  btnArr[i].addEventListener("click", function(){
    // console.log(this.className);
    let current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    let idCategories = btnArr[i].id;
    getShoesByCategories(idCategories);
  })
}


// function showCaterories() {
//   var promise = axios({
//     url: "https://shop.cyberlearn.vn/api/Product/getAllCategory",
//     method: "GET",
//     responseType: "json",
//   })

//   promise.then(function (res) {
//     let categoriesArr = res.data.content;
//     console.log(categoriesArr);
    
//   })

//   promise.catch(function (err) {
//     console.log(err);
//   })
// }

// showCaterories();


