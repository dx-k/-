import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './components/2.router-base/router.js';

const app = createApp(App);

// 挂载路由模块
app.use(router);

app.mount('#app')
