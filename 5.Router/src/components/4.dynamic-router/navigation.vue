<template>
    <button @click="goToAbout('tab2')">push</button>
    <button @click="goBack()">go</button>
</template>
<script>
export default {
    name:"Navigation",
    methods:{
        goToAbout(id){
            this.$router.push(`/about/${id}`)
        },
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>

</style>