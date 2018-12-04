<template lang="html">
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="(photo, i) in photos" :key="photo.title + i" class="glide__slide">
          <div class="home-slide-photo" :style="{backgroundImage: 'url(' + photo.src + ')'}"></div>
        </li>
      </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button v-for="(photo, i) in photos" :key="i" class="glide__bullet" :data-glide-dir="'=' + i"></button>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>
    </div>
  </div>
</template>

<script>
  import Glide from '@glidejs/glide';

  export default {
    name: "Photos",
    props: ["photos"],
    mounted: function () {
      new Glide(this.$el).mount()
    }
  }
</script>

<style lang="scss">
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

// Optional Theme Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

.glide {
  height: 100%;
  .glide__track {
    height: 100%;
  }

  .home-slide-photo {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .glide__slides {
    height: 100%;
  }

}

</style>