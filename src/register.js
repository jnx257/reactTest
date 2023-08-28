 async function registerDb() {
  const name = document.querySelector(".name").value;
const email = document.querySelector(".email").value
const password = document.querySelector(".password").value;
  const confirmPass = document.querySelector(".confimedPassword").value;
  const body = JSON.stringify({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPass,
  });

  fetch("http://localhost:8080/auth/register", {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json)
    .then((data) => {
      console.log("account registered sucessfully", data);
    //   const loginPopup = document.querySelector(".PopUp");
    //   loginPopup.style.display = "block";
    //   setTimeout(() => (loginPopup.style.display = "none"), 5000);
      console.log(body);
    })
    .catch((error)=>console.log(error))
}
export default registerDb

