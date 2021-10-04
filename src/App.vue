<template>
  <div class="site" data-scroll-container>
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
