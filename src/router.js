import { createRouter, createWebHistory} from 'vue-router'
import Books from './components/Book.vue'
import Index from './components/Index.vue'
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
      redirect: "/index",
    },
    {
      path: "/index",
      name: "index",
      component: Index,
    },
    {
      path: "/books",
      name: "books",
      component: Books,
    }
  ]
})

export default router