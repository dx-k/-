<template>
    <div>
        <h1>article子组件，接受props数据</h1>
        <!-- props接受的参数与data的使用方法一致 -->
        <h3>标题：{{ title }}</h3>
        <h5>作者：{{ author }}</h5>
    </div>
</template>
<script>
export default{
    name:"article",
    // 外界可以传递指定的数据，到当前的组件(数组)
    // 使用props数组接受参数，接受参数后即可正常使用
    props:['title','author']
}
</script>