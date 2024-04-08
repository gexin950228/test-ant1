import { createApp } from 'vue';
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router.js'
import axios from './axios.js'

// createApp(App).user(ant).mount('#app')
const app = createApp(App);
app.use(ant).use(router)
app.mount('#app')
app.config.globalProperties.$ajax = axios

// const install = axios.create({
//   baseURL: "http://127.0.0.1:8000"
// })
