<template>  
    <h1>Dynamic {{ $route.params.id }} 组件</h1>
    <p>{{ id }}</p>
</template>
<script>

export default {
    name:"Dynamic",
    props:["id"]
}
</script>