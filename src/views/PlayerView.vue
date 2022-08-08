<template>
  <AudioPlayer>
    <div class="player">
      <div class="player__image">
        <div class="player__option--top transparent-bg">
          <button class="btn player__option__loop">
            <img src="@/assets/loopIcon.svg" alt="">
          </button>
          <button class="btn player__option__shuffle">
            <img src="@/assets/shuffleIcon.svg" alt="">
          </button>
          <button class="btn player__option__repeat">
            <img src="@/assets/repeatIcon.svg" alt="">
          </button>
          <button @click="showPlaylist()" class="btn player__option__playlist">
            <img src="@/assets/menuIcon.svg" alt="">
          </button>
        </div>
        <div class="player__info transparent-bg">
          <div class="player__info__title">{{ songPlaying.author }}</div>
          <div class="player__info__subtitle">{{ songPlaying.title }}</div>
        </div>
        <RangeSlider></RangeSlider>
      </div>
      <div class="player__option">
        <button class="btn player__option__share btn--bg-white">
          <img src="@/assets/shareIcon.svg" alt="">
        </button>
        <button @click="prevSong()" class="btn player__option__previous">
          <img src="@/assets/prevIcon.svg" alt="">
        </button>
        <button @click="playAudio()" class="btn player__option__play">
          <img v-if="audioPlaying" src="@/assets/playIcon.svg" alt="">
          <img v-else src="@/assets/pauseIcon.svg" alt="">
        </button>
          <div class="timer" :style="'--duration: '+songPlaying.duration+';--size: 64;'" :class="{'animation-running': audioPlaying, 'animation-paused': !audioPlaying}">
            <div class="mask" :class="{'animation-running': audioPlaying, 'animation-paused': !audioPlaying}"></div>
          </div>
        <button @click="nextSong()" class="btn player__option__next">
          <img src="@/assets/nextIcon.svg" alt="">
        </button>
        <button class="btn player__option__favourite btn--bg-white">
          <img src="@/assets/heartIcon.svg" alt="">
        </button>
      </div>
    </div>
  </AudioPlayer>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer.vue'
import RangeSlider from '../components/RangeSlider.vue';

export default {
  components: { AudioPlayer, RangeSlider },
  data() {
    return {
      audioPlaying: false,
      songPlaying: this.$store.getters.getSongPlaying,
      songPlayingIndex: this.$store.getters.getSongPlayingIndex,
      allSongs: this.$store.state.songs
    }
  },
  created() {
    if(this.$route.params.playSong) {
      this.audioPlaying = true;
    }
  },
  methods: {
    playAudio() {
      this.audioPlaying = !this.audioPlaying
    },
    showPlaylist() {
      this.$router.push('/playlist')
    },
    prevSong() {
      if(this.songPlayingIndex > 0) {
        this.$store.dispatch('setSong', this.allSongs[this.songPlayingIndex-1]?.id);
        this.songPlaying = this.$store.getters.getSongPlaying;
        this.songPlayingIndex = this.$store.getters.getSongPlayingIndex;
      }
    },
    nextSong() {
      if(((this.songPlayingIndex + 1) < this.$store.state.songs.length) && this.songPlayingIndex >= 0) {
        this.$store.dispatch('setSong', this.allSongs[this.songPlayingIndex+1]?.id);
        this.songPlaying = this.$store.getters.getSongPlaying;
        this.songPlayingIndex = this.$store.getters.getSongPlayingIndex;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  display: flex;
  flex-direction: column;
  height: 100%;
  .transparent-bg {
    height: 64px;
    background-color: rgba(71, 61, 116, 0.6);
  }
  &__info {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__title {
      font-size: 1rem;
      font-weight: 700;
    }
    &__subtitle {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: -1px;
    }
  }
  &__image {
    position: relative;
    background-image: url("../assets/iconapop.jpg");
    height: 340px;
    background-size: cover;
    &:before {
      content: " ";
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(71, 61, 116, 0.26);
    }
  }
  &__option {
    flex: auto;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    .btn {
      width: 36px;
      height: 36px;
      background-color: #60558f;
      border-radius: 36px;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:active {
        background-color: #473d74;
      }
      &:nth-child(3) {
        width: 50px;
        height: 50px;
        position: relative;
        z-index: 2;
      }
      &--bg-white {
        background-color: #fff;
        &:active {
          background-color: #d0c7f4;
        }
      }
    }
    &--top {
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .player__option__playlist {
        position: absolute;
        right: 0;
        opacity: 0.5;
      }
      .btn {
        background-color: transparent;
        border: 0;
        padding: 0 10px;
        cursor: pointer;
        &:active {
          svg {
            fill: #d0c7f4;
          }
        }
      }
    }
  }
  .timer {
    position: absolute;
    background: -webkit-linear-gradient(left, #d6d7e1 50%, #fff 50%);
    border-radius: 100%;
    height: calc(var(--size) * 1px);
    width: calc(var(--size) * 1px);
    -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;
    -webkit-mask: radial-gradient(transparent 50%,#000 50%);
    mask: radial-gradient(transparent 50%,#000 50%);
    animation-play-state: running;
  }
  .mask {
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
    -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;
    -webkit-transform-origin: 100% 50%;
  }
  .animation-running {
    animation-play-state: running;
  }
  .animation-paused {
    animation-play-state: paused;
  }
  @-webkit-keyframes time {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes mask {
    0% {
      background: #fff;
      -webkit-transform: rotate(0deg);
    }
    50% {
      background: #fff;
      -webkit-transform: rotate(-180deg);
    }
    50.01% {
      background: #d6d7e1;
      -webkit-transform: rotate(0deg);
    }
    100% {
      background: #d6d7e1;
      -webkit-transform: rotate(-180deg);
    }
  }
}
</style>
