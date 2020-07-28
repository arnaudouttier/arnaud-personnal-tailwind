var menu  = document.getElementsByClassName("nav-toggle")[0];
menu.addEventListener("click", navBurger);

function navBurger() {
  document.getElementById("inner").classList.toggle("open");
}
