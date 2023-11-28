function login() {
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value
    var errorMessage= document.getElementById("errorMessage")

    if (username === "123" && password === "123"){
        errorMessage.textContent = "Login successfull" 
        errorMessage.style.color = "green"
        window.location.href = "public/index.html"
    } else {
        errorMessage.textContent = "password is incorrect"
        errorMessage.style.color = "red"
    }
}
