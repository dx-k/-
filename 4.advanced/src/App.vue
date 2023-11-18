<template>
  <h1 @click="c">App组件</h1>
  <hr>
  <Ref ref="Ref"></Ref>
  <Cutover></Cutover><br><hr>
  <A></A><br><hr>
  <Sb></Sb><hr>
  <SlotName>
    <template #header>
      <del>头部内容</del>
    </template>
    <template #footer>
      <p>页尾内容</p>
    </template>
    <p>默认内容</p>
  </SlotName><hr>
  <SlotArea>
    <template v-slot:default="{info,c}">
      {{ info,c }}
    </template>
  </SlotArea>
  <Customize></Customize>
  <!-- <input type="text" v-focus1> -->
</template>

<script>
import Ref from './components/1.ref/ref.vue';
import Cutover from './components/1.ref/cutover.vue';
import A from './components/2.dynamic/a.vue';
import Sb from './components/3.slot-base/sb.vue';
import SlotName from './components/4.slot-name/SlotName.vue';
import SlotArea from './components/5.slot-area/SlotArea.vue';
import Customize from './components/6.customize/customize.vue';

export default {
  name: 'App',
  components:{
    Ref,
    Cutover,
    A,
    Sb,
    SlotName,
    SlotArea,
    Customize
  },
  methods:{
    c(){
    this.$refs.Ref.add();
    }
  }
}
</script>
