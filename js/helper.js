const getInput = () => {
    const name = document.getElementById('txtName').value;
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPass').value;
    const gender = document.getElementById('genderSel').value;
    const phone = document.getElementById('phoneNumber').value;

    let isValid = true;
    isValid = kiemTraRong(name, 'tbName', 'txtName') &
        kiemTraRong(email, 'tbEmail', 'txtEmail') &
        kiemTraRong(password, 'tbPass', 'txtPass') &
        kiemTraRong(gender, 'tbGender', 'genderSel') &
        kiemTraRong(phone, 'tbPhone', 'phoneNumber') &
        kiemTraEmail(email, 'tbEmail') &
        checkName(name, 'tbName') &
        checkPassword(password, 'tbPass') &
        checkPhoneNumber(phone, 'tbPhone');

    if (!isValid) {
        return;
    }

    return {
        name, email, password, gender, phone
    };
};