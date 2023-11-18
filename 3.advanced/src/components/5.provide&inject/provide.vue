<template>
    <h1>provide父级组件发送color数据---{{ color }}</h1>
    <button @click="color = 'bule'">更改数据</button>
    <Middle></Middle>
</template>
<script>
import { computed } from 'vue';
import Middle from './middle.vue';
export default {
    name:"Provide",
    data(){
        return{
            color:'red'
        }
    },
    provide(){
        return{
            color:computed(()=> this.color)
        }
    },
    components:{
        Middle
    }
}
</script>