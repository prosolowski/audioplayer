import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    songs: [{
      id: 1,
      title: "Still Don't Know",
      author: "Icona Pop",
      duration: 196,
      favourite: false,
      playing: true
    }, {
      id: 2,
      title: "I Love It",
      author: "Icona Pop",
      duration: 155,
      favourite: false,
      playing: false
    }, {
      id: 3,
      title: "Girlfriend",
      author: "Icona Pop",
      duration: 170,
      favourite: false,
      playing: false
    }, {
      id: 4,
      title: "We Got the World",
      author: "Icona Pop",
      duration: 185,
      favourite: false,
      playing: false
    }, {
      id: 5,
      title: "Nights Like This",
      author: "Icona Pop",
      duration: 204,
      favourite: false,
      playing: false
    }, {
      id: 6,
      title: "Nights Like This",
      author: "Icona Pop",
      duration: 204,
      favourite: false,
      playing: false
    }, {
      id: 7,
      title: "60 seconds song",
      author: "Fake Icona Pop",
      duration: 60,
      favourite: false,
      playing: false
    }, {
      id: 8,
      title: "30 seconds song",
      author: "Fake Icona Pop",
      duration: 30,
      favourite: false,
      playing: false
    }]
  },
  getters: {
    getSongPlaying(state) {
      return state.songs.find(element => element.playing == true)
    }
  },
  mutations: {
    setSongPlaying(state, id) {
      state.songs.forEach(element => {
        if(element.id == id) element.playing = true
        else element.playing = false
      })
    },
  },
  actions: {
    setSong({ commit }, id) {
      commit('setSongPlaying', id)
    }
  },
})

export default store