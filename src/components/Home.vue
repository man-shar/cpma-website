<template lang="html">
  <div id="home-container" class="playfair">
    <LeftRail/>
    <RightRail/>
  </div>
</template>

<script>
  import LeftRail from './LeftRail.vue';
  import RightRail from './RightRail.vue';

  export default {
    name: "Home",
    components: {
      LeftRail,
      RightRail
    }
  }
</script>

<style lang="scss">
#home-container {
  text-align: center;

  .siderail {
    width: 48%;
    padding-top: 50px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
  }
}
</style>