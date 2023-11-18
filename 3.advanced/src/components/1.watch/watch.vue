<template>
    <h3>watch侦听器的用法</h3>
    <input type="text" v-model.trim="info.username">
    <input type="text" v-model.trim="password">
</template>
<script>
export default {
    name:"MyWatch",
    data(){
        return{
            password:"123",
            username:"admin",
            info:{
                username:"zs",
                age:12
            },
            names:['asd','xcf','b']
        }
    },
    // watch侦听器用于data成员的变化
    watch:{
        // 使用成员名作为方法名来进行监听
        // 其中两个参数，新值，旧值
        username(newVal,oldVal){
            this.names.forEach(e=>{
                if(e == newVal){
                    alert("用户名不可用");
                    this.username = '';
                    return;
                }
            })
            console.log("没有被占用");
        },
        password:{
            handler(newVal,oldVal){
                // console.log(newVal,oldVal);
            },
            immediate:true
        },
        'info.username':{
            handler(newVal){
                this.names.forEach(e=>{
                    if(e == newVal){
                        alert("用户名不可用");
                        this.username = '';
                        return;
                    }
                })
                console.log("没有被占用");
            },
            deep:true
        }
    }
}
</script>