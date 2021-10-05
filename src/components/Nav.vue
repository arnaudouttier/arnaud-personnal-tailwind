<template>
  <div>
    <nav class="navigation">
      <ul>
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

  export default {
    name: 'Nav',
    data () {
      return{
      }
    },
    mounted(){
        this.fadeIn() //method1 will execute at pageload
  },
  methods:{
        fadeIn (){
          const navigation = document.querySelector('.navigation')
        }
     },
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '~@/assets/scss/variables.scss';

  .navigation{
    margin-bottom: 128px;
    text-align:right;
    animation-name: slideInFromTop ;
    animation-duration: .7s;
    animation-timing-function: ease-in;

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
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    50% {
      transform: translateY(6px);
      opacity: 1;
    }
    100% {
      transform: translateY(0%);
    }
}
</style>
