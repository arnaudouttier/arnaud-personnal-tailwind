<template>
    <section class="contact" >
      <h5>To get in touch , write arnaud.outtier@protonmail.com</h5>
    </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@/assets/scss/variables.scss';

  .contact{
    &:before{
            content: "";
            border-top: 2px solid $secondary-color;
            width: 50px;
            display: block;
            margin-bottom: 6rem;
        }
  }
</style>
