console.log("Hii!");

getProductDetail = () => {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=1',
        method: 'GET',
        // responseType: "json",
    })

    promise.then(function (res) {
        let detailArr = res.data.content
        console.log(detailArr.size);
    })

    promise.catch(function (err) {
        console.log(err);
    })
}
getProductDetail();
