<template lang="html">
  <div id="home-container" class="playfair">
    <div class="full-width rel flex flex-centered school-photo">
      <span class="huge school-name">St. CPMA</span>
      <div class="stick-bottom huge up-down">
        <i class="fa fa-angle-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
require("../assets/school.jpeg")
  export default {
    name: "Home",
  }
</script>

<style lang="scss">
#home-container {
  text-align: center;

  .school-photo {
    background-image: linear-gradient(to top, #00000088 0%, #ffffff00 30%), url("../assets/school.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    .school-name {
      text-shadow: $black-shadow;
    }
  }
}
</style>