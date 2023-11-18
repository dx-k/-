import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import axios from 'axios';

const app = createApp(App);
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
app.config.globalProperties.$http = axios;
app.mount('#app');
