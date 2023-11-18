// 导入路由所需的两个方法
import { createRouter, createWebHashHistory } from 'vue-router';

// 导入组件
import BaseAbout from './base_About.vue';
import BaseHome from './base_Home.vue';
import BaseMovie from './base_Movie.vue';
// 子路由组件
import Tab1 from './3.router-nested/tab1.vue';
import Tab2 from './3.router-nested/tab2.vue';
// 动态路由组件
import dynamic from '../4.dynamic-router/dynamic.vue';
 
// 创建路由对象
const router = createRouter({
    // 指定高亮激活类名，默认类名为 router-link-active
    linkActiveClass: "active_router",
    // 通过 history 属性指定路由的工作模式
    history: createWebHashHistory(),
    // 通过 routes 数组，指定路由规则
    routes: [
        // redirect 重定向
        { path: "/", redirect: "/home" },
        // 动态路由匹配
        { name:"dynamic",path: "/dynamic/:id", component: dynamic,props: true },
        // path 是 hash 地址，component 是要展示的组件
        { path: "/home", component: BaseHome },
        { path: "/movie", component: BaseMovie },
        {
            path: "/about",
            component: BaseAbout,
            redirect: "/about/tab1",// 重定向，只要进入 about 页面直接进入 tab1 组件中
            children: [// 通过 children 属性嵌套声明子路由规则
                { path: "tab1", component: Tab1 },// 注意：子路由规则的path不要以/开头
                { path: "tab2", component: Tab2 }
            ]
        },
    ]
});

// 声明全局的导航守卫
router.beforeEach((to,from,next)=>{
    // console.log(to);
    // console.log(from);
    const tokenstr = localStorage.getItem('token');
    if(to.path === '/home' && !tokenstr){
        // 如果访问的是home并且没有token，则跳转到about页面
        next('./about');
    }else{
        // 如果访问的是home并且有token，则正常访问
        next();
    }
})
export default router;

