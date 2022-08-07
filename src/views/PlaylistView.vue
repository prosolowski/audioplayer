<template>
  <AudioPlayer>
    <div class="playlist">
      <h1 class="header">Playlist</h1>
      <button @click="showPlayer()" class="btn btn__back"><svg xmlns="http://www.w3.org/2000/svg" fill="#60558f" width="16" height="16" viewBox="0 0 24 24"><path d="M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z"/></svg></button>
      <div class="songs__wrapper">
        <ul class="songs">
          <li v-for="song in songs" :key="song.id" @click="playSong(song)" class="song">
            <div class="song__details"><span class="song__duration">{{ secondsToMinutes(song.duration) }}</span><span>|</span><span class="song__author">{{ song.author }}</span></div>
            <div class="song__title">{{ song.title }}</div>
            <button class="btn song__share"><svg xmlns="http://www.w3.org/2000/svg" fill="#60558f" width="14" height="14" viewBox="0 0 24 24"><path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"/></svg></button>
            <button class="btn song__favourite"><svg xmlns="http://www.w3.org/2000/svg" fill="#f00" width="14" height="14" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg></button>
          </li>
        </ul>
        <div class="shadow"></div>
      </div>
    </div>
  </AudioPlayer>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer.vue'
import secondsToMinutes from '../mixins/secondsToMinutesMixin'

export default {
  components: { AudioPlayer },
  mixins: [secondsToMinutes],
  data() {
      return {
          songs: [{
                  id: 1,
                  title: "Still Don't Know",
                  author: "Icona Pop",
                  duration: 196,
                  favourite: false
              }, {
                  id: 2,
                  title: "I Love It",
                  author: "Icona Pop",
                  duration: 155,
                  favourite: false
              }, {
                  id: 3,
                  title: "Girlfriend",
                  author: "Icona Pop",
                  duration: 170,
                  favourite: false
              }, {
                  id: 4,
                  title: "We Got the World",
                  author: "Icona Pop",
                  duration: 185,
                  favourite: false
              }, {
                  id: 5,
                  title: "Nights Like This",
                  author: "Icona Pop",
                  duration: 204,
                  favourite: false
              }, {
                  id: 6,
                  title: "Nights Like This",
                  author: "Icona Pop",
                  duration: 204,
                  favourite: false
              }, {
                  id: 7,
                  title: "60 seconds song",
                  author: "Fake Icona Pop",
                  duration: 60,
                  favourite: false
              }, {
                  id: 8,
                  title: "30 seconds song",
                  author: "Fake Icona Pop",
                  duration: 30,
                  favourite: false
              }]
      };
  },
  methods: {
    showPlayer() {
        this.$emit("togglePlayer", false);
        this.$router.push("/");
    },
    playSong(song) {
        this.$router.push({
            name: "player",
            params: { song }
        });
    }
  }
}

</script>

<style lang="scss" scoped>
.playlist {
  padding: 20px 25px 50px;
  height: 100%;
  .header {
    color: #60558f;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 10px;
  }
  .btn {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .btn__back {
    background-color: #fff;
    transform: scaleY(-1) rotate(180deg) translate(0px, 0px) skew(0deg, 0deg);
    position: absolute;
    top: 20px;
  }
  .songs__wrapper {
    overflow-x: scroll;
    height: 90%;
  }
  .shadow {
    display: block;
    width: 100%;
    background: linear-gradient(transparent 10%, #eeeff5);
    height: 70px;
    position: sticky;
    bottom: 0;
  }
  .songs {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .song {
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
    &__details {
      grid-column: 1/span 2;
      grid-row: 1/2;
      font-size: 0.8rem;
      color: #88858f;
      line-height: 1;
      span {
        padding-right: 5px;
      }
    }
    &__title {
      grid-column: 1/span 2;
      grid-row: 2/3;
      font-size: 1rem;
      color: #2f1a4b;
      line-height: 1;
    }
    &__share {
      grid-column: 3/4;
      grid-row: 1/ span 2;
    }
    &__favourite {
      grid-column: 4/5;
      grid-row: 1/ span 2;
    }
  }
}
</style>
