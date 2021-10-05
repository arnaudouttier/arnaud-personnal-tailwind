<template>
  <header ref="scrollSections" id="header" class="site-header">
      <Nav/>
      <div class="site-intro">
        <h2>Ce site est mon site personnel. Je m'appelle Arnaud Outtier - Développeur Web Junior - Support Informatique - Curieux et passionné des technologies du web</h2>
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
<style scoped lang="scss">
</style>
