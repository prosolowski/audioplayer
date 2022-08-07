<template>
  <div class="audioplayer">
    <div class="audioplayer__card">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.audioplayer {
  background-image: url("../assets/player_bg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__card {
    width: 360px;
    height: 480px;
    background-color: #eeeff5;
    border-radius: 20px;
    overflow: hidden;
  }
}
</style>
