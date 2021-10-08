<template>
  <header ref="scrollSections" id="header" class="site-header">
    <Nav />
    <div class="site-intro">
      <h1>
        Ce site est mon site personnel. Je m'appelle Arnaud Outtier -
        Développeur Web Junior - Support Informatique - Curieux et passionné des
        technologies du web
      </h1>
    </div>
  </header>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// Large devices (desktops, 992px and up)
.navigation {
  margin-bottom: 10.2rem;
}

.site-intro {
  opacity: 0;
  animation: fadeInLeft 0.9s 0.3s ease forwards;
}

@media (min-width: 992px) {
  header {
    height: 90vh;
  }
  .navigation {
    margin-bottom: 24rem;
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
