<template>
  <AudioPlayer>
    <div class="playlist">
      <h1 class="playlist__header">Playlist</h1>
      <button class="playlist__button btn--rounded" @click="showPlayer()">
        <img src="@/assets/arrowIcon.svg" alt="" />
      </button>
      <div class="playlist__container">
        <ul class="song__list">
          <li
            class="song__item"
            v-for="song in allSongs"
            :key="song.id"
            @click="playSong(song)"
          >
            <div class="song__details">
              <span class="song__duration">{{
                secondsToMinutes(song.duration)
              }}</span
              ><span>|</span><span class="song__author">{{ song.author }}</span>
            </div>
            <div class="song__title">{{ song.title }}</div>
            <button class="song__share btn--rounded">
              <img src="@/assets/shareIcon.svg" alt="" />
            </button>
            <button class="song__favourite btn--rounded">
              <img v-if="song.favourite" src="@/assets/heartIcon.svg" alt="">
              <img v-else src="@/assets/heartEmptyIcon.svg" alt="">
            </button>
          </li>
        </ul>
        <div class="shadow"></div>
      </div>
    </div>
  </AudioPlayer>
</template>

<script>
import AudioPlayer from "../components/AudioPlayer.vue";
import secondsToMinutes from "../mixins/secondsToMinutesMixin";

export default {
  components: { AudioPlayer },
  mixins: [secondsToMinutes],
  data() {
    return {
      allSongs: this.$store.state.songs,
    };
  },
  methods: {
    showPlayer() {
      this.$emit("togglePlayer", false);
      this.$router.push("/");
    },
    playSong(song) {
      this.$store.dispatch("setSong", song.id);
      this.$router.push({
        name: "player",
        params: { playSong: true },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  padding: 20px 25px 50px;
  height: 100%;

  &__header {
    color: #60558f;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 10px;
  }

  &__button {
    background-color: #fff;
    transform: scaleY(-1) rotate(180deg) translate(0px, 0px) skew(0deg, 0deg);
    position: absolute;
    top: 20px;
  }

  &__container {
    overflow-x: scroll;
    height: 90%;
  }

  .btn--rounded {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .song {
    &__list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    &__item {
      display: grid;
      grid-template-columns: 4fr 3fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;
      border-bottom: 1px solid #d3d5de;
      padding: 20px 0;
      cursor: pointer;

      &:hover {
        .song__title {
          text-decoration: underline;
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }
    &__details {
      grid-column: 1 / span 2;
      grid-row: 1/2;
      font-size: 0.8rem;
      color: #88858f;
      line-height: 1;

      span {
        padding-right: 5px;
      }
    }
    &__title {
      grid-column: 1 / span 2;
      grid-row: 2/3;
      font-size: 1rem;
      color: #2f1a4b;
      line-height: 1;
    }

    &__share {
      grid-column: 3/4;
      grid-row: 1 / span 2;
    }

    &__favourite {
      grid-column: 4/5;
      grid-row: 1 / span 2;
    }
  }
  .shadow {
    display: block;
    width: 100%;
    background: linear-gradient(transparent 10%, #eeeff5);
    height: 70px;
    position: sticky;
    bottom: 0;
  }
}
</style>
