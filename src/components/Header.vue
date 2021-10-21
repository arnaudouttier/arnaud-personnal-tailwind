<template>
  <header id="header" class="site-header">
    <div class="header-top">
      <div class="site-logo">
        <h1>[/\.]</h1>
      </div>
      <Nav />
    </div>
    <div class="site-intro">
      <h1 class="ml1">
        <span class="letters">
          Ce site est mon site personnel. Je m'appelle Arnaud Outtier -
          Développeur Web Junior - Support Informatique - Curieux et passionné
          par les technologies du web
         
        </span>
      </h1>
    </div>
    <p>{{windowWith}}</p>
  </header>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import Nav from "./Nav.vue";

export default {
  name: "Header",
  components: {
    Nav,
  },
  data() {
    return {
      windowWith: window.innerWidth,
    };
  },
  computed: {
    fadeInJs() {
      // Wrap every letter in a span
      var textWrapper = document.querySelector(".ml1 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline({ loop: false }).add({
        targets: ".ml1 .letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 30 * (i + 1),
      });
    },
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
    this.fadeInJs;
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

.ml1 {
  font-weight: 900;
}

.ml1 .letter {
  display: inline-block;
  line-height: 1em;
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

  .site-intro {
    width: 70%;
  }

  .ml1 {
    font-size: 3.3rem;
  }
}
</style>
