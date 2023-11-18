<template>
    <input type="password" v-if="inputVisible" ref="cutover">
    <button v-else @click="showInput" >展示input输入框</button>
</template>
<script>
export default {
    name:"cutover",
    data(){
        return{
            inputVisible:false
        }
    },
    methods:{
        showInput(){
            this.inputVisible = !this.inputVisible;
            /**
             * DOM元素是异步更新的，执行到这行代码时还没有更新出来DOM元素，那么也就是不能执行
             */
            this.$nextTick(()=>{
                this.$refs.cutover.focus();
            })
        }
    },
}
</script>