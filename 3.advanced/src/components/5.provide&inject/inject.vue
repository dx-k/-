<template>
    <h1>inject子孙组件接收数据 --- {{ color }}</h1>
</template>
<script>
export default {
    name:"Inject",
    inject:['color']
}
</script>