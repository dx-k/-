<template>
    <h1>具名插槽组件</h1>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
</template>
<script>
export default {
    name:"SlotName"
}
</script>