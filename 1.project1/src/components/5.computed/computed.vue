<template>
    <input type="text" v-model="count">
    <!-- 计算属性必须当作普通属性使用 -->
    <p>{{ count }}乘以2的值{{ push }}</p>
</template>
<script>
export default {
    name:"computedd",
    data(){
        return{
            count:1
        }
    },
    // 以函数的形式声明到computed选项中
    computed:{
        push(){
            // 计算属性侧重于得到一个计算结果，因此计算属性中必须有return值
            return this.count * 2;
        }
    }
}
</script>