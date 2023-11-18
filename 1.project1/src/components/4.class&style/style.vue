<template>
    <h3 class="thin" :class="[isItalic ? 'italic' : '',isDelete ? 'delete' : '']">style组件</h3>
    <button @click="isItalic = !isItalic">italic</button>
    <button @click="isDelete = !isDelete">delete</button>
</template>
<script>
export default {
    name:"Style",
    data(){
        return{
            isItalic:true,
            isDelete:true
        }
    },
}
</script>
<style lang="less">
    .thin{
        font-weight: 200;
    }
    .italic{
        font-style: italic;
    }
    .delete{
        text-decoration: line-through;
    }
</style>
