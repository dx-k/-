<template>
    <div>
        <h3>post组件</h3>
        <br>
        <button @click="postInfo">发起post请求</button>
    </div>
</template>
<script>
export default {
    name:"Post",
    methods:{
        async postInfo(){
            const {data:res} = await this.$http.post('/posts',{name:'zs',age:20});
            console.log(res);
        }
    }
}
</script>
<style scoped>
div{
    width: 400px;
    height: 300px;
    border: 1px solid black;
}
</style>