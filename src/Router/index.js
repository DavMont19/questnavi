import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'
import SearchView from '../views/SearchView.vue'
import ArchiveView from '../views/Archive.vue'

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
