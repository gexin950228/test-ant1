import { createRouter, createWebHistory} from 'vue-router'

const webHistory = createWebHistory()

const router = createRouter({
  history: webHistory,
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import('./components/MyFirst')
    },
    {
      path: "/",
      name: "index",
      component: () => import('./components/Index')
    },
  ]
})

export default router