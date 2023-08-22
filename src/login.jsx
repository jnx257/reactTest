
async function loginDB(handleLogic) {
    const email = document.querySelector(".email").value
    const password = document.querySelector(".password").value;
    const body = JSON.stringify({ email,password });
  
    await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json)
      .then((data, response) => {
        console.log("login auth", data);
        const loginPopup = document.querySelector(".popup");
        setTimeout(() => (loginPopup.style.display = "content"), 5000);
        if(response = true){
          loginPopup.style.display = "block";
        }
      })
      .catch((error) => console.log(error));
  }
   export default loginDB
   
  