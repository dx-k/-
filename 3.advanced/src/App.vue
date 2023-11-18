<template>
  <h1>App组件</h1>
  <hr>
  <MyWatch></MyWatch>
  <liveCycle v-if="flag"></liveCycle>
  <button @click="flag=!flag" v-if="flag">隐藏liveCycle</button>
  <button @click="flag=!flag" v-else>显示liveCycle</button>
  <fToSon></fToSon>
  <hr>
  <div class="f">
    <Send></Send>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Accept></Accept>
  </div>
  <Provide></Provide>
  <div class="f">
    <Get></Get>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Post></Post>
  </div>
</template>
<script>
import MyWatch from './components/1.watch/app.vue';
import liveCycle from './components/2.live-cycle/index.vue';
import fToSon from './components/3.fatherAndSon/father.vue';
import Send from './components/4.eventBus/send.vue';
import Accept from './components/4.eventBus/accept.vue';
import Provide from './components/5.provide&inject/provide.vue';
import Get from './components/6.axios/get.vue';
import Post from './components/6.axios/post.vue';

export default {
  name:"App",
  data(){
    return{
      flag:true
    }
  },
  components:{
    MyWatch,
    liveCycle,
    fToSon,
    Send,
    Accept,
    Provide,
    Get,
    Post
  }
}
</script>
<style scoped>
.f{
  display: flex;
}
</style>