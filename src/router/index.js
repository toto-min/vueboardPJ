import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    name: 'home',
    component: () => import('@/components/Main/Main.vue')
  },
  {
    path:'/board',
    name:'Board',
    component: () => import('@/components/Board/Board.vue')
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
