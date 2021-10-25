<template>
  <header id="header" class="site-header">
    <Nav />
    <div class="site-intro">
      <h1 class="ml1">
        <span class="letters">
          Ce site est mon site personnel. Je m'appelle Arnaud Outtier -
          Développeur Web Junior - Support Informatique - Curieux et passionné
          par les technologies du web
        </span>
      </h1>
    </div>
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
      letterClass: "letter-class",
    };
  },
  methods: {
    fadeInJs() {
      // Wrap every letter in a span
      let textWrapper = document.querySelector(".ml1 .letters");
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
        delay: (el, i) => 27 * (i + 1),
      });
    },
    winWidth() {
      let windowWidth = window.innerWidth;
      if (windowWidth >= 992) {
        this.fadeInJs();
      }
    },
  },
  mounted() {
    this.winWidth();
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/variables.scss";

.site-intro {
  opacity: 0;
  animation: fadeInRight 0.9s ease 0.3s forwards;
}

.ml1 {
  font-weight: 900;
}

.letter {
  display: inline-block;
  line-height: 1em;
}

@media (min-width: 992px) {
  header {
    height: 90vh;
  }

  .site-intro {
    width: 80%;
  }

  .ml1 {
    font-size: 3.3rem;
  }

  .letter {
    transition: transform 0.6s ease;

    &:hover {
      transform: rotateY(180deg) !important ;
    }
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>
