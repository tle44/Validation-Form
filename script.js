const container = document.querySelector(".container");
const linkLogin = document.querySelector(".link-login");
const linkRegister = document.querySelector(".link-register");

linkRegister.addEventListener("click", () => {
    container.classList.add("active");
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
});

linkLogin.addEventListener("click", () => {
    container.classList.remove("active");
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
});
