<template>
  <p class="mb_b10">App组件</p>
  <div class="border mb_b10">
    <h1 class="levelCenter">手写简易路由</h1>
    <a href="/#/home">home组件</a>&nbsp;
    <a href="/#/movie">movie组件</a>&nbsp;
    <a href="/#/about">about组件</a><br>
    <component :is="this.comName"></component>
  </div>
  <div class="border mb_b10">
    <h1 class="levelCenter">路由的基本使用</h1>
    <BaseApp></BaseApp>
  </div>
  <div class="border mb_b10">
    <h1 class="levelCenter">动态路由匹配</h1>
    <router-link to="/">home</router-link>&nbsp;
    <router-link to="/dynamic/1">dynamic1</router-link>&nbsp;
    <router-link to="/dynamic/2">dynamic2</router-link>
    <router-view></router-view>
  </div>
  <div class="border mb_b10">
    <h1 class="levelCenter">编程式导航</h1>
    <navigation></navigation>
  </div>
  <div class="border mb_b10">
    <h1 class="levelCenter">命名路由</h1>
    <!-- params:传递的参数对象 -->
    <router-link :to="{name:'dynamic',params:{id:1}}">go to dynamic</router-link>&nbsp;
    <button @click="goToDynamic(2)">go to dynamic</button>
  </div>
</template>
<script>
// 手写简易路由
import Home from './components/1.demo/home.vue';
import Movie from './components/1.demo/movie.vue';
import About from './components/1.demo/about.vue';
// vue-router 基本使用
import BaseApp from './components/2.router-base/base_App.vue';
// 动态路由匹配的使用
import Dynamic from './components/4.dynamic-router/dynamic.vue';
import navigation from './components/4.dynamic-router/navigation.vue';

export default {
  name:"App",
  data(){
    return{
      comName:"Home",
    }
  },
  methods:{
    // 命名路由实现编程式导航
    goToDynamic(id){
      this.$router.push({
        name:"dynamic",
        params:{
          id:id
        }
      });
    }
  },
  components:{
    Home,
    Movie,
    About,
    BaseApp,
    Dynamic,
    navigation,
    name
  },
  created(){
    window.onhashchange = ()=>{
      switch(location.hash){
        case "#/home":
          this.comName = "Home";
          return;
        case "#/movie":
          this.comName = "Movie";
          return;
        case "#/about":
          this.comName = "About";
          return;
      }
    }
  }
}
</script>
<style scoped>
.mb_b10{
  margin-bottom: 10px;
}
.border{
  border: 1px solid black;
}
.levelCenter{
  text-align: center;
}
</style>