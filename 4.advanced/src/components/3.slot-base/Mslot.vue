<template>
    <p>第一个p标签</p>
    <slot></slot>
    <p>最后一个p标签</p>
    <slot>默认内容，如果用户没有提供任何内容时显示</slot>

</template>
<script>
export default {
    name:"Mslot"
}
</script>