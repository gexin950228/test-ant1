import { createRouter, createWebHistory} from 'vue-router'
import Book from './components/Book.vue'
import Index from './components/Index.vue'
import book_detail from './components/BookDetail'
import FileUpload from './components/FileUpload'
import FilesUpload from './components/FilesUpload'
import PostTest from './components/PostTest'

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
      path:"/books",
      name:"Book",
      component:Book,
    },
    {
      path:"/book_detail/:id",
      // path:"/book_detail/?id=:id",
      name:"book_detail",
      component:book_detail

    },
    {
      path: "/file_upload",
      name: "file_upload",
      component: FileUpload,
    },
    {
      path: "/files_upload",
      name: "files_upload",
      component: FilesUpload,
    },
    {
      path: "/post_test",
      name: "post_test",
      component: PostTest,
    },
  ]
})

export default router