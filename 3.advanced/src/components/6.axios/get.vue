<template>
    <div>
        <h3>get组件</h3>
        <br>
        <button>发起get请求</button>
        <img :src="img" alt="">
    </div>
</template>
<script>
export default {
    name:"Get",
    data(){
        return{
            img:''
        }
    },
    async created(){
        const {data:res} = await this.$http.get('/photos',{
            // params:{
            //     name:'zs',
            //     age:55
            // }
        })
        this.img = res[1].url;
        console.log(this.img);
    }
}
</script>
<style scoped>
div{
    width: 400px;
    height: 300px;
    border: 1px solid black;
}
img{
    width: 100px;
    height: 100px;
}
</style>