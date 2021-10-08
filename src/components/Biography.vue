<template>
    <section class="biography js-scroll fade-in">
      <h4>Biography</h4>
      <div class="biography-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nesciunt alias quia, doloribus, at nobis fugit velit repudiandae maxime similique ea doloremque distinctio! Odit exercitationem blanditiis quae saepe ullam ducimus officia excepturi accusantium. Saepe sed veritatis id atque unde, similique iure odio at magnam, alias cupiditate fuga aliquam. Corrupti earum dolorem quas labore similique saepe eligendi eum minus maxime molestias ipsam, cumque eius aliquam at dicta velit sapiente ipsum suscipit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsum exercitationem nobis magnam similique eveniet? At rerum dicta quo. A nemo quod sit harum placeat laborum repellendus quas aliquid natus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas repellat, sit sunt neque natus iure mollitia culpa quis dolore, non, dignissimos magnam eligendi. Rerum quod tenetur, vitae consequuntur, temporibus in placeat maiores, voluptatibus voluptate quos adipisci. Rerum, nulla debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a qui sapiente hic quam temporibus facere cumque aut minima esse, odio consequuntur et nobis non ut impedit cupiditate praesentium recusandae.</p>
      </div>
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

     @media (min-width: 992px) {
        .biography-content{
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 30px;
        }
     }
</style>
