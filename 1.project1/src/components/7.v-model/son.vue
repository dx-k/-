<template>
    <p>子组件count值是：{{ number }}</p>
    <button @click="add">+1</button>
    <hr>
</template>
<script>
export default {
    name:"son",
    // 子组件使用props接受父组件传递过来的值
    props:['number'],
    // 父组件接受子组件参数时要在子组件中声明emits自定义事件，格式为updata:xxx
    emits:['updata:number'],
    methods:{
        add(e){
            // console.log(e);
            this.$emit('updata:number',this.number+1,this.$event);
        }
    }
}
</script>