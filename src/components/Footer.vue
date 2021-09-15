<template>
    <footer id="footer" class="site-footer" >
      <div class="social-navigation" >
        <ul>
          <li>Github</li>
          <li>Frontendmentor</li>
          <li>Notion</li>
        </ul>
      </div>
      <div class="copyright">
          <p>AO {{currentDateTime()}}</p>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    currentDateTime() {
      const current = new Date();
      const dateYears = current.getFullYear();
      return dateYears;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
