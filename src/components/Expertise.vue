<template>
    <div class="expertise">
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
    </div> 
</template>

<script>
export default {
  name: 'Expertise'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul{
    list-style-type: none;
  }
  li{
    &:before{
      content: "–";
      margin-right: 0.8rem;
    }
  }

</style>
