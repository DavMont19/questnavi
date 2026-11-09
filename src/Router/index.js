import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../Views/DashBoardView.vue' 
import SearchView from '../Views/SearchView.vue'
import ArchiveView from '../Views/ArchiveView.vue'    

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/archive',
    name: 'archive',
    component: ArchiveView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
