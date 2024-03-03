const container = document.querySelector(".container");
const login = document.querySelector(".login-section h1");
const signup = document.querySelector(".signup-section h1");

signup.addEventListener("click", () => {
  container.classList.add("active");
});

login.addEventListener("click", () => {
  container.classList.remove("active");
});
