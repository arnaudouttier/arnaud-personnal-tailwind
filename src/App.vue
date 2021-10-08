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

      const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
          elementTop >
          (window.innerHeight || document.documentElement.clientHeight)
        );
      };

      const displayScrollElement = (element) => {
        element.classList.add("scrolled");
      };

      // const hideScrollElement = (element) => {
      //   element.classList.remove("scrolled");
      // };

      const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
          if (elementInView(el, 1)) {
            displayScrollElement(el);
          }
          // else if (elementOutofView(el)) {
          //   hideScrollElement(el)
          // }
        });
      };
      window.addEventListener("scroll", () => {
        handleScrollAnimation();
      });
    },
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/main.scss";
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
