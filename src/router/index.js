import Vue from 'vue'
import VueRouter from 'vue-router'
import PlayerView from '../views/PlayerView.vue'
import PlaylistView from '../views/PlaylistView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'player',
      component: PlayerView
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: PlaylistView
    }
  ]
})

export default router
