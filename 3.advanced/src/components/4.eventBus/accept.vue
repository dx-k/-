<template>
    <div>
        <h2>accept组件数据接受方 --- {{ number }}</h2>
    </div>
</template>
<script>
import bus from './EventBus';
export default {
    name:"accept",
    data(){
        return{
            number:0
        }
    },
    created(){
        bus.on('countChange',count=>{
            this.number = count;
        });
    },
}
</script>
<style scoped>
    div{
        width: 400px;
        height: 300px;
        border: 1px solid black;
    }
</style>