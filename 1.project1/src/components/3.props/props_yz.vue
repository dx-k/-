<template>
    <h1>{{ asd }}</h1>
</template>
<script>
export default {
    name:"props",
    props:{
        asd:{
            // 只会警告，不会报错
            // type:[String,Number],
            // 当没有传递数据时，使用默认数据
            default:"默认数据",
            // 必填项，当没有传递数据时会使用默认值，并报错
            required:false,
            // validator(value){
            //     return typeof(value) == String || typeof(value) == Number;
            // }
        }
    }
}
</script>
<style>

</style>