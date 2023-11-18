<template>
    <h1>中间层组件</h1>
    <Inject></Inject>
</template>
<script>
import Inject from './inject.vue';
export default {
    name:"Middle",
    components:{
        Inject
    }
}
</script>