import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './pages/Login.vue'

// AuthService
import AuthService from './services/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!AuthService.loggedIn()) {
      next({
        path: '/login'
      })
    }else {
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    if (AuthService.loggedIn()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router