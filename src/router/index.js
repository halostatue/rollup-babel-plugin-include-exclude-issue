import Vue from 'vue'
import VueRouter from 'vue-router'

import ChangePassword from '@components/ChangePassword'
import HomePage from '@components/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: `/change-password`,
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
