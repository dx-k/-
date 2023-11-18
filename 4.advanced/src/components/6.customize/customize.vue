<template>
    <h3>自动获取焦点 --- {{ count }}</h3><hr>
    <!-- v-focus绑定到的元素自动获取焦点 -->
    <input type="text" v-focus1="10">
    <button @click="count+=1">+1</button>
</template>
<script>
export default {
    name:"Customize",
    data(){
        return{
            count:0
        }
    },
    // 自定义指令
    directives:{
        // 自定义指令必须指向一个配置对象
        focus:{
            // 当被绑定的元素插入到DOM中时，自动触发mounted函数
            mounted(el){
                el.focus();
            }
        }
    }
}
</script>