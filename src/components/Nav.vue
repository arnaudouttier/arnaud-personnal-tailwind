<template>
  <div data-scroll-section>
    <nav class="navigation" data-scroll data-scroll-speed="-8" data-scroll-position="top" data-scroll-target="#header" data-scroll-repeat >
      <ul data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-position="top" data-scroll-target="#header">
        <li>
          <a href="">Biography</a>
        </li>
        <li>
          <a href="">Technology</a>
        </li>
        <li>
          <a href="">Expertise</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  
</template>

<script>
  import LocomotiveScroll from 'locomotive-scroll';

  export default {
    name: 'Nav',
    mounted() {
      const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-section]'),
      smooth: true,
      smoothMobile: true,
      getDirection: true
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@/assets/scss/variables.scss';

  .navigation{
    margin-bottom: 128px;
    text-align:right;

    a{
      position: relative;
      
      &:after{
        position: absolute;
        content: "";
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: $secondary-color;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }
      &:hover:after{
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
  /* Keyframes */
@keyframes fill {
  0%{
    border-bottom: 1px solid red;
    width: 0%;
  }
  25%{
    border-bottom: 1px solid red;
    width: 100%;
  }
  75%{
    right: 0;
    border-bottom: 1px solid rgb(33, 173, 20);
    width: 0%;
  }
  100%{
    border-bottom: 1px solid rgb(33, 173, 20);
    width: 100%;
  }
}


</style>
