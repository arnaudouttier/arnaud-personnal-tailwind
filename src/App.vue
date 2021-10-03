<template>
  <div class="site" role="scrollSections" >
    <Header/>
    <main class="site-content" >
      <Biography/>
      <Expertise/>
      <Contact/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import locomotiveScroll from "locomotive-scroll"
import Header from './components/Header.vue'
import Biography from './components/Biography.vue'
import Expertise from './components/Expertise.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Biography,
    Expertise,
    Contact,
    Footer
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

<style lang="scss">
  @import './src/assets/scss/main.scss';
  .site{
    padding: 0 16px;
  }

  header, .site-content{
    margin-bottom: 128px;
  }
</style>
