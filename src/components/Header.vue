<template>
  <header ref="scrollSections" id="header" class="site-header" data-scroll-section >
      <Nav/>
      <div class="site-intro" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-8" data-scroll-position="top" data-scroll-target="#header" data-scroll-repeat>
        <h2>Ce site est mon site personnel. Je m'appelle Arnaud Outtier - Développeur Web Junior - Support Informatique - Curieux et passionné des technologies du web</h2>
      </div>
  </header>
</template>

<script>
import Nav from './Nav.vue'
import locomotiveScroll from "locomotive-scroll"

export default {
  name: 'Header',
  components: {
    Nav
  },
  data() {
    return {
      scrollIns: null
    };
  },
   mounted() {
    const _self = this;
    this.$nextTick(function() {
      _self.initLocoScroll();
    });
  },
  methods: {
    initLocoScroll() {
      const _self = this;
      this.scroll = new locomotiveScroll({
        el: _self.$refs['scrollSections'],
        smooth: true,
        smoothMobile: true,
        getDirection: true
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navigation{
    margin-bottom: 128px;
  }

  .navigation{
    text-align: right;
  }

</style>
