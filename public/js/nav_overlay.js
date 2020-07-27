document.getElementClassNames(".nav-toggle").addEventListener("click", navBurger);

function navBurger() {
  document.getElementClassNames(".inner").classList.toggle("open");
}
