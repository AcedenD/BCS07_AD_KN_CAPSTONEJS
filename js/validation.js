function kiemTraRong(checkInput, idThongBao, idInput) {
    // Check xe input có được nhập dữ liệu vô hay không nếu không có thì báo lỗi và trả về một kết quả false, nếu có thì trả về true.
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idInput).classList.remove("is-invalid");
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường dữ liệu này";
        document.getElementById(idInput).classList.add("is-invalid");
        return false;
    }
}
// Check email
function kiemTraEmail(checkInput, idThongBao) {
    // Kiểm tra email bằng regex
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // Sử dụng phương thức .test để kiểm tra xem email nhập vào có phủ hợp hay không
    // Khi sử dụng .test sẽ trả về giá trị true hoặc false
    let hopLe = regexEmail.test(checkInput)
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById("txtEmail").classList.remove("is-invalid");
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng Email";
        document.getElementById("txtEmail").classList.add("is-invalid");
        return false;
    }
}
// check tên nhân viên: là chữ
function checkName(checkInput, idThongBao) {
    let regexName = /^[\p{L}\s]+$/u;
    let hopLe = regexName.test(checkInput)
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById("txtName").classList.remove("is-invalid")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Tên người dùng không hợp lệ";
        document.getElementById("txtName").classList.add("is-invalid");
        return false;
    }
}
// check mật khẩu: 6-10 (chứa ít nhất 1 kí tự số, 1 kí tự in hoa, 1 kí tự đặc biệt)
function checkPassword(checkInput, idThongBao) {
    let regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    let hopLe = regexPassword.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById("txtPass").classList.remove("is-invalid")
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Password phải từ 6-10 và ít nhất 1 kí tự số, in hoa, và kí tự đặc biệt)";
        document.getElementById("txtPass").classList.add("is-invalid")
        return false;
    }
}
// Kiểm tra sđt
function checkPhoneNumber(checkInput, idThongBao) {
    let regexPhoneNumber = /^\d+$/;
    let hopLe = regexPhoneNumber.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById("phoneNumber").classList.remove("is-invalid");
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng số điện thoại";
        document.getElementById("phoneNumber").classList.add("is-invalid");

        return false;
    }
}