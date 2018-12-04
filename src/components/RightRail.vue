<template>
  <div class="siderail right-rail desk-50-mob-100">
    <Photos :photos="photos" class="right-rail-photos"/>
  </div>
</template>

<script>
  import Photos from "./Photos.vue";
  export default {
    name: 'RightRail',
    components: {
      Photos
    },
    data: function () {
      return {
        photos: [{
            src: require("../assets/white-dude.jpeg"),
            title: "Kids"
          },
          {
            src: require("../assets/teachers.jpeg"),
            title: "Kids"
          },
          {
            src: require("../assets/front-kids.jpeg"),
            title: "Kids"
          },
          {
            src: require("../assets/school.jpeg"),
            title: "Kids"
          },
          {
            src: require("../assets/kids.jpeg"),
            title: "Kids"
          }
        ]
      }
    },
  }
</script>

<style lang="scss">
  .right-rail-photos {
    height: 80vh;
  }
</style>
