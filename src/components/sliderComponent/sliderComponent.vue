<template>
  <div class="slider">
    <div
      class="left-section"
      v-for="(slider, indexSlider) in sliderContent"
      :key="indexSlider"
      v-if="active == indexSlider"
    >
      <div class="img-slider">
        <img :src="getUrl(slider.name)" alt="" srcset="" />
      </div>
      <div class="slider-info">
        <div class="slider-number">{{ slider.num }}</div>
        <div class="slider-title">{{ slider.title }}</div>
      </div>
      <div class="slider-nav">
        <button
          class="btn-slider prev" name="prev"
          type="button"
          aria-label="prev"
          @click.prevent="changeSlide(0)"
        ></button>
        <button
          class="btn-slider next" name="next"
          type="button"
          aria-label="next"
          @click.prevent="changeSlide(1)"
        ></button>
      </div>
    </div>
    <div class="right-section">
      <div class="trip-title">
        {{ tabTitle }}
      </div>
      <div class="trip-desc">
        <div>{{ tabDesc }}</div>
        <div>{{ tabDescSec }}</div>
      </div>

      <button type="button" class="btn">SEE OUR LATEST OFFER</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sliderContent", "tabTitle", "tabDesc", "tabDescSec"],
  data() {
    return {
      show: 0,
      active: 0,
    };
  },
  methods: {
    getUrl(imageName) {
      console.log(imageName);
      return require("@/assets/images/" + imageName);
    },
    changeSlide: function (num) {
      this.active = num;
    },
  },
  created() {
  },
};
</script>