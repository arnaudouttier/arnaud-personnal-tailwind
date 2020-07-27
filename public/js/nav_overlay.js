
document.getElementsByClassName("nav-toggle").addEventListener("click", navBurger);

function navBurger() {
  document.getElementsByClassName("inner").classList.toggle("open");
}
