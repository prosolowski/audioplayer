<template>
  <div class="audioplayer">
    <div class="audioplayer__card">
      <PlaylistView v-if="showPlaylist" @togglePlayer="togglePlayer" @playSong="playSong" />
      <PlayerView v-else @togglePlayer="togglePlayer" :songPlaying="songPlaying" />
    </div>
  </div>
</template>

<script>
import PlayerView from '../views/PlayerView.vue'
import PlaylistView from '../views/PlaylistView.vue'

export default {
  components: {
    PlayerView,
    PlaylistView
  },
  data() {
    return {
      showPlaylist: false,
      songPlaying: {}
    }
  },
  methods: {
    togglePlayer(show) {
      this.showPlaylist = show
    },
    playSong(song) {
      this.songPlaying = song
    }
  }
}

</script>

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
