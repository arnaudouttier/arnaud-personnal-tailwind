<template>
  <div class="site">
    <Header />
    <main class="site-content">
      <Biography />
      <Expertise />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Biography from "./components/Biography.vue";
import Expertise from "./components/Expertise.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Biography,
    Expertise,
    Contact,
    Footer,
  },
  mounted() {
    this.scrollGeneral();
    this.random_bg_color();
  },
  methods: {
    scrollGeneral() {
      const scrollElements = document.querySelectorAll(".js-scroll");

      const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
          elementTop <=
          (window.innerHeight || document.documentElement.clientHeight) /
            dividend
        );
      };

      const displayScrollElement = (element) => {
        element.classList.add("scrolled");
      };

      const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
          if (elementInView(el, 1)) {
            displayScrollElement(el);
          }
        });
      };
      window.addEventListener("scroll", () => {
        handleScrollAnimation();
      });
    },
    random_bg_color() {
      const body = document.querySelector("body");
      const site = document.querySelector(".site");
      const expertiseButton = document.querySelector(".expertise .button");
      const svg = document.querySelectorAll("svg");

      const getRandomNumber = (limit) => {
        return Math.floor(Math.random() * limit);
      };

      const getRandomColor = () => {
        const h = getRandomNumber(360);
        const s = getRandomNumber(60);
        const l = getRandomNumber(40);

        return `hsl(${h}deg, ${s}%, ${l}%)`;
      };

      const setBackgroundColor = () => {
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
        site.style.color = randomColor;
        expertiseButton.style.borderColor = randomColor;
        for (let i = 0; i < svg.length; i++) {
          svg[i].style.fill = randomColor;
        }
      };

      // const setBcolorNavLink = () => {
      //   const randomColor = getRandomColor();
      //   const navLink = document.querySelectorAll(".navigation a");
      //   for (let i = 0; i < navLink.length; i++) {
      //     let navLinkAfter = window.getComputedStyle(navLink[i], ":after");
      //     navLinkAfter.setProperty("background-color", randomColor);
      //   }
      // };

      setBackgroundColor();

      setInterval(() => {
        setBackgroundColor();
      }, 10000);
    },
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/main.scss";
body {
  transition: background 1s;
}

.site {
  max-width: 992px;
  margin: 0 auto;
  padding: 0 16px;
}

header,
.site-content {
  margin-bottom: 110px;
}

@media (min-width: 992px) {
  header {
    margin-bottom: 0;
  }
}

.js-scroll {
  opacity: 0;
  transition: opacity 500ms;
}

.js-scroll.scrolled {
  opacity: 1;
}
</style>
