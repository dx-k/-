<template>
    <h1>sb组件</h1>
    <Mslot>
        <p>父组件的内容会被放入插槽中</p>
        <p>又是一个标签</p>
    </Mslot>
</template>
<script>
import Mslot from './Mslot.vue';
export default {
    name:"sb",
    components:{
        Mslot
    }
}
</script>