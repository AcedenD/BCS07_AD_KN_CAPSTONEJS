console.log("hello world");

function getSignUpInfo() {
  console.log(getInput())
  if (getInput()) {
    var arrInput = document.querySelectorAll("#signUpForm input, #signUpForm select");

    // console.log(arrInput);

    var signUpInfo = {
      name: arrInput[0].value,
      email: arrInput[1].value,
      password: arrInput[2].value,
      gender: arrInput[3].value,
      phoneNumber: arrInput[4].value,
    };

    document.getElementById("signUpForm").reset();
    console.log(signUpInfo);

    var promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      responseType: "json",
      data: signUpInfo,
    })

    promise.then((res) => {
      console.log(res.data);
      alert("Sign up successfully!");

    });

    promise.catch((err) => {
      console.log(err.response.data);
      alert("Sign up failed!");
    });
  }


}


document.getElementById("signUpReg").onclick = getSignUpInfo;