<template>
  <header ref="scrollSections" id="header" class="site-header" data-scroll-section >
      <Nav/>
      <div class="site-intro">
        <h2 data-scroll data-scroll-direction="horizontal">Ce site est mon site personnel. Je m'appelle Arnaud Outtier - Développeur Web Junior - Support Informatique - Curieux et passionné des technologies du web</h2>
      </div>
  </header>
</template>

<script>
import Nav from './Nav.vue'
import LocomotiveScroll from "locomotive-scroll"

export default {
  name: 'Header',
  components: {
    Nav
  },
  mounted() {
      const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-section]'),
      smooth: true,
      smoothMobile: true,
      getDirection: true
      });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
