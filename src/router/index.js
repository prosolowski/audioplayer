import Vue from 'vue'
import VueRouter from 'vue-router'
import PlayerView from '../views/PlayerView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (Playlist.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PlaylistView.vue')
    }
  ]
})

export default router
