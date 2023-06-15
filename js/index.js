console.log("hello world");


function getAllShoes() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  })

  promise.then(function (res) {
    let shoesArr = res.data.content
    // console.log(shoesArr);
    let tempArr = getRandomShoes(shoesArr);
    // console.log(tempArr);
    renderShoes(tempArr)
  })

  promise.catch(function (err) {
    console.log(err);
  })
}

getAllShoes();

function renderShoes(shoesArr) {
  // console.log(shoesArr);
  var content = "";
  for (let i = 0; i < 6; i++) {
    // console.log(shoesArr[i]);
    // <img src="${shoesArr[i].image}" class="card-img-top" alt="test"></img>
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

function getRandomShoes(shoesArr) {
  let tempArr = [];

  while (tempArr.length < 6) {
    let randomIndex = Math.floor(Math.random() * shoesArr.length);
    if (tempArr.includes(shoesArr[randomIndex])) {

    } else {
      tempArr.push(shoesArr[randomIndex]);
    }
  }




  // for (let i = 0; i < 6; i++) {
  //   let randomIndex = Math.floor(Math.random() * shoesArr.length);
  //   console.log(randomIndex);
  //   if(tempArr.includes(shoesArr[randomIndex])){

  //   }else{
  //     tempArr.push(shoesArr[randomIndex]);
  //   }
  // }
  return tempArr;

}

