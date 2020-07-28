var navToggle = document.querySelectorAll(".nav-toggle");
var i;
for (i = 0; i < navToggle.length; i++) {
  navToggle[i].addEventListener("click", navBurger);
} 

function navBurger() {
  document.getElementById("inner").classList.toggle("open");
}
