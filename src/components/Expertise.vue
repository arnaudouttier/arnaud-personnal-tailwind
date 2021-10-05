<template>
    <section class="expertise js-scroll fade-from-left ">
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

  .scrolled.fade-from-left{
    animation: fade-from-left 2s ease;
  }

  @keyframes fade-from-left  {
    0%{
      transform: translateX(-100%);
      opacity: 0;
    }
        100%{
      transform: translateX(0%);
      opacity: 1;
    }
  }

</style>
