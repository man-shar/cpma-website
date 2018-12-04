<template>
  <div class="siderail left-rail desk-50-mob-100">
    <div class="insane root-color">St. CPMA</div>
    <div class="locator"><img src="../assets/map.png"/></div>
  </div>
</template>

<script>
export default {
  name: 'LeftRail'
}
</script>

<style lang="scss">
  .locator {
    padding: 0 10%;
    margin-top: 10px;
    img {
      width: 100%;
    }
  }
  .left-rail {
    position: sticky;
    top: 0px;
  }
</style>
