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


// camelCase
function camelCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// PascalCase
function pascalCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function removeSpaces(str) {
  return str.replace(/\s/g, "");
}

function findHighestAndLowest(array){
  let highest = array[0];
  let highestIndex = 0;
  let lowest = array[0];
  let lowestIndex = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > highest){
      highest = array[i];
      highestIndex = i;
    }
    if(array[i] < lowest){
      lowest = array[i];
      lowestIndex = i;
    }
  };

  return { highest: { value: highest, index: highestIndex }, lowest: { value: lowest, index: lowestIndex } };
  
}

function findMostCommonString(array) {
  let mostCommon = "";
  let mostCommonCount = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i].length > mostCommonCount){
      mostCommon = array[i];
      mostCommonCount = array[i].length;
    }
  }
  return mostCommon;
}
