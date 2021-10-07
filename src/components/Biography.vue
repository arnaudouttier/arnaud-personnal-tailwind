<template>
    <section class="biography js-scroll fade-in">
        <h4>Biography</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi doloremque ipsam aperiam voluptas laboriosam repellat eum voluptate neque accusantium ex perspiciatis recusandae, possimus id, molestias est aut sapiente adipisci.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas repellat, sit sunt neque natus iure mollitia culpa quis dolore, non, dignissimos magnam eligendi. Rerum quod tenetur, vitae consequuntur, temporibus in placeat maiores, voluptatibus voluptate quos adipisci. Rerum, nulla debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a qui sapiente hic quam temporibus facere cumque aut minima esse, odio consequuntur et nobis non ut impedit cupiditate praesentium recusandae.</p>
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
        margin-bottom: 110px;
    
        &:before{
            content: "";
            border-top: 2px solid $secondary-color;
            width: 50px;
            display: block;
            margin-bottom: 6rem;
        }
    }

    .scrolled.fade-in{
        animation: fade-in 2s ease-in-out;
    }


@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
