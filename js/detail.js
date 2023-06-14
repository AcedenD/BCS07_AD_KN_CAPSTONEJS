console.log("Hii!");

const getProductDetail = async (idProduct) => {
    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
        method: 'GET',
        responseType: "json",
    })

    promise.then(function (res) {
        let detailArr = res.data.content;
        console.log("detailArr: ", detailArr.name);
        console.log(document.getElementById('shoes_name'));
    })
    promise.catch(function (err) {
        console.log(err);
    })
}

export const handleClickDisplayDetail = (idProduct) => {
    getProductDetail(idProduct);
} 
