<template>
    <div>
        <h1>这是epp父组件传输props数据给article</h1>
    </div>
    <!-- 在标签中使用属性名传递参数 -->
    <MyArticle :title="info.title" :author="'post by'+info.author"></MyArticle>
</template>
<script>
import article from './article.vue';
export default{
    name:"epp",
    data(){
        return {
            info:{
            title:"abc",
            author:"123"
            }
        }
    },
    components:{
        MyArticle:article
    }
}
</script>
<style scoped>
    h1{
        color: black;
    }
</style>