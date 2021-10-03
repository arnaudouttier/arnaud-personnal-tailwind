<template>
    <section class="expertise">
      <h3>Expertise</h3>
      <div class="expertise-list">
          <ul>
            <li>html</li>
            <li>html</li>
            <li>html</li>
            <li>html</li>
            <li>html</li>
            <li>html</li>
            <li>html</li>
            <li>html</li>
            <li>html</li>
          </ul>
      </div>
    </section> 
</template>

<script>
export default {
  name: 'Expertise'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .expertise{
    margin-bottom: 128px;
  }

  li{
    &:before{
      content: "–";
      margin-right: 0.8rem;
    }
  }

</style>
