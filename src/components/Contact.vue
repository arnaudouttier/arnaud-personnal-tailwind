<template>
  <section id="contact" class="contact js-scroll fade-from-bottom">
    <p>
      Vous avez une demande , n'hésitez pas à m'écrire
      <span>arnaud.outtier@protonmail.com</span>
    </p>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";

.contact {
  font-family: $secondary-font;
  color: #080808;

  &:before {
    content: "";
    border-top: 2px solid $secondary-color;
    width: 50px;
    display: block;
    margin-bottom: 6rem;
  }
  p {
    display: inline;
  }
  span {
    position: relative;

    &:after {
      content: "";
      border-bottom: 2px solid $secondary-color;
      position: absolute;
      left: 0;
      bottom: -4px;
      right: 0;
    }
  }
}

.scrolled.fade-from-bottom {
  animation: fade-from-bottom 2s ease;
}

@keyframes fade-from-bottom {
  0% {
    transform: translateY(+30px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
