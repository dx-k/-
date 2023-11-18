<template>
    <div>
        <hr>
        <h1>自定义事件</h1>
        <!-- 4.事件发生时调用执行指定函数 -->
        <Counter @countChange="getCount"></Counter>
    </div>
</template>
<script>
import Counter from './2.vue';
export default {
    name:"CustomEvents",
    components:{
        Counter
    },
    // 3.声明自定义事件需要执行的函数
    methods:{
        getCount(val){
            console.log("触发了countChange事件",val);
        }
    }
}
</script>