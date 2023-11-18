<template>
    <div>
        <h1>BaseAbout组件</h1><hr>
        <!-- 在 about 页面声明两个子路由链接 -->
        <router-link to="/about/tab1">Tab1</router-link>&nbsp;
        <router-link to="/about/tab2">Tab2</router-link>
        <!-- 在 about 页面中声明组件的路由占位符 -->
        <router-view></router-view>
    </div>
</template>
<script>
// 导入两个子组件

export default {
    name:"BaseAbout",
}
</script>
<style scoped>
div{
    width: 100vw;
    background-color: rgba(239, 239, 239);
}
</style>