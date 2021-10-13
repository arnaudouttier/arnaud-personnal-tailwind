<template>
  <header id="header" class="site-header">
    <div class="header-top">
      <div class="site-logo">
        <h1>[/\.]</h1>
      </div>
      <Nav />
    </div>
    <div class="site-intro">
      <h1>
        Ce site est mon site personnel. Je m'appelle Arnaud Outtier -
        Développeur Web Junior - Support Informatique - Curieux et passionné par
        les technologies du web
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
@import "~@/assets/scss/variables.scss";

.header-top {
  margin-bottom: 14rem;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 4rem;
    letter-spacing: 1px;
    color: $primary-color;
    margin-top: 12px;
  }
}

.site-logo {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.site-intro {
  opacity: 0;
  animation: fadeInLeft 0.9s 0.3s ease forwards;
}

@media (min-width: 992px) {
  header {
    height: 90vh;
  }

  .header-top {
    margin-bottom: 20rem;
  }

  .site-logo {
    opacity: 1;
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
