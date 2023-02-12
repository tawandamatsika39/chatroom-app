import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { firebase_auth } from '@/firebase/config'

//auth guard
const requireAuth = (to, from, next) => {
  let user = firebase_auth.currentUser
  if (!user) {
    next({name: 'welcome'})
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = firebase_auth.currentUser 
  if (user) {
    next({name: 'chatroom'})
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
