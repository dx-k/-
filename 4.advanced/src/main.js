import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App);
app.directive('focus1',(el,v)=>{
    el.focus();
    // 传递过来的参数是一个对象，value才是真正的传递的参数
    console.log(v.value);
})
app.mount('#app');
