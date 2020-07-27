<<<<<<< HEAD
var menu  = document.getElementsByClassName("nav-toggle")[0];
menu.addEventListener("click", navBurger);

function navBurger() {
  document.getElementById("inner").classList.toggle("open");
=======

document.getElementsByClassName("nav-toggle").addEventListener("click", navBurger);

function navBurger() {
  document.getElementsByClassName("inner").classList.toggle("open");
>>>>>>> a8563047e1a1404cc5a27758951f320a345c41f2
}
