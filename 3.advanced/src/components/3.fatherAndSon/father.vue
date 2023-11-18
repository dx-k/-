<template>
    <hr>
    <h1>father组件 --- {{ count }}</h1>
    <button @click="count++">+1</button>
    <!-- <Son :number="count" @numChange="getNum"></Son> -->
    <Son v-model:number="count"></Son>
</template>
<script>
import Son from './son.vue';
export default {
    name:"fToSon",
    data(){
        return{
            count:0,
            info:{name:"zs",age:14}
        }
    },
    components:{
        Son
    },
}
</script>