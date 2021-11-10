<template>
  <header id="header" class="site-header">
    <Nav />
    <div class="site-intro">
      <h1 class="letters">
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
  methods: {
    splitLetters() {
      let textWrapper = document.querySelector(".letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    },
    winWidth() {
      let windowWidth = window.innerWidth;
      if (windowWidth >= 992) {
        this.splitLetters();
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
  cursor: pointer;
}

.letters {
  font-weight: 700;
}

.letter {
  line-height: 1em;
}

@media (min-width: 992px) {
  header {
    height: 90vh;
  }

  .site-intro {
    width: 60%;
  }

  .letters {
    font-size: 3.3rem;
  }

  .letter {
    transition: transform 0.6s ease;

    &:nth-child(even) {
      &:hover {
        display: inline-block;
        transform: rotateY(180deg);
      }
    }

    &:nth-child(odd) {
      &:hover {
        display: inline-block;
        transform: rotateY(-180deg);
      }
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
