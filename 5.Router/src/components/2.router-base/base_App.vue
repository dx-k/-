<template>
    <!-- 在使用 router-link 标签时需要使用 to 属性定义hash地址 -->
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/movie">电影</router-link>&nbsp;
    <router-link to="/about">关于</router-link>
    <!-- 路由占位符，匹配到哪个组件，就渲染哪个组件 -->
    <router-view></router-view>
</template>
<script>
import BaseAbout from './base_About.vue';
import BaseHome from './base_Home.vue';
import BaseMovie from './base_Movie.vue';
export default {
    name:"BaseApp",
    components:{
        BaseAbout,
        BaseHome,
        BaseMovie
    }
}
</script>