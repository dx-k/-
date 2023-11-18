<template>
    <h1>v-model父组件 --- {{ count }}</h1>
    <button @click="count+=1">+1</button>
    <!-- 父组件通过v-bind属性绑定的形式把数据传递给子组件 -->
    <son :number="count" @updata:number="d"></son>
    <!-- 子组件向父组件传递数据需要在v-bind之前添加v-model指令 -->
</template>
<script>
import son from "./son.vue"
export default {
    name:"father",
    components:{
        son
    },
    data(){
        return{
            count:0
        }
    },
    methods:{
        d(a){
            this.count = a
        }
    }
}
</script>