<template>
    <h3>作用域插槽组件</h3>
    <slot :info="infomation" :c="cc"></slot>
</template>
<script>
export default {
    name:"SlotArea",
    data(){
        return{
            infomation:{
                name:"zs",
                age:"55"
            },
            cc:15
        }
    }
}
</script>