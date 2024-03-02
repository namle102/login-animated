const container = document.querySelector(".container");
const signup = document.querySelector(".signup h1");
const login = document.querySelector(".login h1");

login.addEventListener("click", () => {
  container.classList.add("active");
});

signup.addEventListener("click", () => {
  container.classList.remove("active");
});
