<template>
    B组件---{{ count }}
    <button @click="count+=1">+1</button>
</template>
<script>
export default {
    name:"B",
    data(){
        return{
            count:0
        }
    }
}
</script>