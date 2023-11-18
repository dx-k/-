<template>
  <div>
    <h1>这是根节点<i>vue组件</i></h1>
    {{ username }}
    <button @click="addCount">按钮</button>
    <p>{{ count }}</p>
    <hr>
    <my_swiper></my_swiper>
    <MyTest></MyTest>
    <div>
      <my_serch></my_serch>
    </div>
  <epp></epp>
  <asd></asd>
  <props_yz :asd="asd"></props_yz>
  <computedd></computedd>
  <aCounter></aCounter>
  <vModel></vModel>
  </div>
</template>


<script>
// 局部注册组件
import Serch from '../src/components/2.private/Serch.vue';
import epp from './components/3.props/epp.vue';
import asd from './components/4.class&style/asd.vue';
import props_yz from './components/3.props/props_yz.vue';
import computedd from './components/5.computed/computed.vue';
import aCounter from './components/6.Customevents/1.vue';
import vModel from './components/7.v-model/father.vue';


export default {
  // name 属性表示当前组件的名称
  name:"App",
  data(){
    return{
      username:"zs",
      count:1,
      asd:523
    }
  },
  methods:{
    addCount(){
      // 使用this可以访问到data中的内容
      // console.log(this);
      this.count++;
    },
  },
  components:{
    "my_serch":Serch,
    epp,
    asd,
    props_yz,
    computedd,
    aCounter,
    vModel
  }
}
</script>


<!-- scoped表示仅对该组件以及该组件下的子组件的标签生效 -->
<!-- 在Vue中，当我们使用scoped修饰符在组件中定义样式时，实际上会生成一个唯一的属性选择器，该选择器会被添加到所有组件内的元素上，以确保样式只应用于当前组件及其子组件。 -->

<!-- 当存在多个根组件时，每个根组件都有自己独立的作用域和样式规则。因此，默认情况下，父组件对h1标签的样式修改不会影响到其他根组件中的相同元素。 -->
<style lang="less" scoped>
  h1{
    color: red;
    // less 支持嵌套写法
    i{
      color: blue;
    }
  }
  :deep(p){
    color: saddlebrown;
  }
</style>