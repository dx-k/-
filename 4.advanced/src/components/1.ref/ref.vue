<template>
    ref组件
    <h3 ref="myH3">asdfhjb---{{ count }}</h3>
    <button @click="getRefs">获取ref</button>
</template>
<script>
export default {
    name:"Ref",
    data(){
        return{
            count:0
        }
    },
    methods:{
        getRefs(){
            console.log(this.$refs.myH3);
            this.$refs.myH3.style.color = "red";
        },
        add(){
            this.count++;
        }
    }
}
</script>