<template>
  <range-slider
    class="slider"
    min="10"
    max="100"
    step="1"
    v-model="sliderValue">
  </range-slider>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  components: {
    RangeSlider
  },
  data () {
    return {
      sliderValue: 80
    }
  }
}

</script>

<style lang="scss">
.slider {
  width: 100%;
  padding: 0;
  z-index: 999;
}
.range-slider-fill {
  background-color: #fff;
}
.range-slider-rail {
  background-color: #ed5e74;
}
.range-slider-rail, .range-slider-fill {
  height: 8px;
  border-radius: 0;
}
.range-slider {
  display: flex;
  height: 8px;
}
.range-slider-knob {
  background-color: #fff;
  background-image: url(@/assets/audioIcon.svg);
  background-size: 11px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>