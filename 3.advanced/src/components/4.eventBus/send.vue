<template>
    <div>
        <h2>send组件数据发送方 --- {{ count }}</h2>
        <br>
        <button @click="send">+1</button>
    </div>
</template>
<script>
import bus from './EventBus';
export default {
    name:"Send",
    data(){
        return{
            count:0
        }
    },
    methods:{
        send(){
            this.count++;
            bus.emit('countChange',this.count);
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