// 1.从vue中导入 createApp 函数
// createApp函数：用于创建vue的 '单页面应用程序'
import { createApp } from 'vue';
// 2.导入待渲染的 App 组件
import App from './App.vue';
// 全局注册组件
import Swiper from './components/1.global/Swiper.vue';
import Test from './components/1.global/Test.vue';


// 3.调用 createApp 函数传入待渲染的组件，返回一个'单页面应用程序实例'
const app = createApp(App);

// 调用 app.commponent() 方法全局注册组件
app.component('my_swiper',Swiper);
app.component(Test.name,Test);

// 4.调用 实例的mount方法，传入标签的id或class值，用来指定该实例实际渲染的的区域
app.mount("#app");


