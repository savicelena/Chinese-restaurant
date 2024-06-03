import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import About from '../views/About.vue'
import Account from '../views/Account.vue'
import Menu from '../views/MenuFood.vue'
import FoodDetail from "../views/FoodDetail.vue"
import ActionsPage from '../views/ActionsPage.vue'
import BestGradedPage from '../views/BestGradedPage.vue'
import NewWorkersPage from '../views/NewWorkersPage.vue'
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
    component: Account
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
    path: '/photoGallery',
    name: 'PhotoGallery',
    component: PhotoGallery
  },
  {
    path: '/videoGallery',
    name: 'VideoGallery',
    component: VideoGallery
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
