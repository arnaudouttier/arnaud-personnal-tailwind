<template>
  <nav class="navigation">
    <ul>
      <li>
        <a href="#biography">Biography</a>
      </li>
      <li>
        <a href="#expertise">Expertise</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/assets/scss/variables.scss";

.navigation {
  text-align: right;
  animation: slideInFromTop 2s ease forwards;

  a {
    position: relative;

    &:after {
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
    &:hover:after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  50% {
    transform: translateY(4px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
