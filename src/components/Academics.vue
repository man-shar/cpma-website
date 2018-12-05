<template>
  <div class="full-width">
    <Photos :photos='photos'/>
  </div>
</template>

<script>
import Photos from "./Photos.vue";

export default {
  name: 'Academics',
  components: {
    Photos
  },
  data: function() {
    return {
      photos: [
        {
          title: "acads-1",
          src: require("../assets/acads-1.jpeg")
        },
        {
          title: "acads-2",
          src: require("../assets/acads-2.jpeg")
        },
        {
          title: "acads-3",
          src: require("../assets/acads-3.jpeg")
        },
        {
          title: "acads-4",
          src: require("../assets/acads-4.jpeg")
        },
        {
          title: "acads-5",
          src: require("../assets/acads-5.jpeg")
        },
        {
          title: "acads-6",
          src: require("../assets/acads-6.jpeg")
        },
        {
          title: "acads-7",
          src: require("../assets/acads-7.jpeg")
        },
      ]
    }
  }
}
</script>