<template>
    <div>
        <p>count的值是：{{ count }}</p>
        <button @click="add">+1</button>    
    </div>
</template>
<script>
export default {
    name:"Counter",
    // 1.声明自定义事件
    emits:["countChange"],
    data(){
        return{
            count:0
        }
    },
    methods:{
        add(){
            this.count++;
            // 2.使用this.$emit()触发事件
            this.$emit('countChange',this.count);
        }
    }
}
</script>