import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RandomPage from '../views/RandomPage.vue'
import SearchPage from '../views/SearchPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/search/:id',
      component: SearchPage,
      props: true
    },
    {
      path: '/random',
      component: RandomPage
    }
  ]
})

export default router
