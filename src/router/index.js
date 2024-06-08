import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import About from '../views/About.vue'

import Menu from '../views/MenuFood.vue'
import FoodDetail from "../views/FoodDetail.vue"
import ActionsPage from '../views/ActionsPage.vue'
import BestGradedPage from '../views/BestGradedPage.vue'
import NewWorkersPage from '../views/NewWorkersPage.vue'
import CheckSignIn from "../views/CheckSignIn.vue"
import store from '../store'
import SignIn from '../views/SignIn.vue'
import RegisterVue from '../views/RegisterVue.vue'
import PhotoGallery from '../views/PhotoGallery.vue'
import VideoGallery from '../views/VideoGallery.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },{
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/account',
    name: 'Account',
    component: CheckSignIn,
    meta: {requiresAuth : true}
  },{
    path: '/about',
    name: 'About',
    component: About
  }, {
    path : '/menu/:id',
    name : 'FoodDetail',
    component : FoodDetail
  },
  {
    path: '/offers',
    name: 'Actions',
    component: ActionsPage
  },
  {
    path: '/newWorkers',
    name: 'NewWorkers',
    component: NewWorkersPage
  },
  {
    path: '/bestGraded',
    name: 'BestGraded',
    component: BestGradedPage
  },
  {
    path: '/signin',
    name: 'SignIn',
    component : SignIn
  },{
    path : '/register',
    name : 'RegisterVue',
    component : RegisterVue
  },
  {
    path: '/photoGallery',
    name: 'PhotoGallery',
    component: PhotoGallery
  },
  {
    path: '/videoGallery',
    name: 'VideoGallery',
    component: VideoGallery
  },
  {
    path: '/check-sign-in',
    name: 'CheckSignIn',
    component: CheckSignIn
  },

]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isSignedIn) {
      next({ name: 'SignIn' })  // Ako korisnik nije prijavljen, preusmeri na SignIn
    } else {
      next()  // Ako je korisnik prijavljen, dozvoli navigaciju
    }
  } else {
    next()  // Ako ruta ne zahteva autentifikaciju, dozvoli navigaciju
  }
})

export default router
