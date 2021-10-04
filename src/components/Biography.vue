<template>
    <section class="biography">
        <h4>Biography</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi doloremque ipsam aperiam voluptas laboriosam repellat eum voluptate neque accusantium ex perspiciatis recusandae, possimus id, molestias est aut sapiente adipisci.
        </p>
    </section>
</template>

<script>
export default {
  name: 'Biography'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '~@/assets/scss/main.scss';

    .biography{
        margin-bottom: 128px;
    
        &:before{
            content: "";
            border-top: 2px solid $secondary-color;
            width: 50px;
            display: block;
            margin-bottom: 6rem;
        }
    }
</style>
