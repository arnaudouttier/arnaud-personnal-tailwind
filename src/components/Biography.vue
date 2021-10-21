<template>
  <section id="biography" class="biography js-scroll fade-in">
    <div class="biography-header">
      <h2>Biographie</h2>
      <p>
        Cette introduction sera l'unique contenu de ma biographie , le reste
        sera du texte aléatoire faute de matière nécessaire à la rédaction.
      </p>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
      ipsum exercitationem nobis magnam similique eveniet? At rerum dicta quo. A
      nemo quod sit harum placeat laborum repellendus quas aliquid natus.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas
      repellat, sit sunt neque natus iure mollitia culpa quis dolore, non,
      dignissimos magnam eligendi. Rerum quod tenetur, vitae consequuntur,
      temporibus in placeat maiores, voluptatibus voluptate quos adipisci.
      Rerum, nulla debitis?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a qui
      sapiente hic quam temporibus facere cumque aut minima esse, odio
      consequuntur et nobis non ut impedit cupiditate praesentium recusandae.
    </p>
  </section>
</template>

<script>
export default {
  name: "Biography",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/main.scss";

.biography {
  margin-bottom: 110px;
  text-align: justify;

  &:before {
    content: "";
    border-top: 2px solid $secondary-color;
    width: 50px;
    display: block;
    margin-bottom: 6rem;
  }
}

.biography-header {
  p {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 64px 0;
  }
}

.scrolled.fade-in {
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
  .biography {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }

  .biography-header {
    grid-column: 1/2;
    width: 300px;

    p {
      margin: 32px 0;
    }
  }
}
</style>
