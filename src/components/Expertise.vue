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
  @import '~@/assets/scss/variables.scss';

  .expertise{
    margin-bottom: 128px;

    &:before{
            content: "";
            border-top: 2px solid $secondary-color;
            width: 50px;
            display: block;
            margin-bottom: 6rem;
        }
  }

  li{
    &:before{
      content: "–";
      margin-right: 0.8rem;
    }
  }

</style>
