<template>
  <header ref="scrollSections" id="header" class="site-header">
      <Nav/>
      <div class="site-intro">
        <h1>Ce site est mon site personnel. Je m'appelle Arnaud Outtier - Développeur Web Junior - Support Informatique - Curieux et passionné des technologies du web</h1>
      </div>
  </header>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Header',
  components: {
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  // Large devices (desktops, 992px and up)
  .navigation{
    margin-bottom: 10.2rem;
  }
  
  @media (min-width: 992px) {
    header{
      height: 90vh;
    }
    .navigation{
      margin-bottom: 24rem;
    }
  }

</style>
