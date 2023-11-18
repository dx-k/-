<template>
    <p>son组件 --- {{ number }}</p>
    <button @click="add">+1</button>
</template>
<script>
export default {
    name:"Son",
    props:['number'],
    // emits:['numChange'],
    emits:['update:number'],
    methods:{
        add(){
            // this.$emit("numChange",this.number+1);
            this.$emit("update:number",this.number+1);
        }
    }
}
</script>