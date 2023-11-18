<template>
    <h3>liveCycle组件 --- {{ count }}</h3>
    <button @click="count+=1">+1</button>
</template>
<script>
export default {
    name:"liveCycle",
    data(){
        return{
            count:0
        }
    },
    // 创建，挂载，销毁三个函数与el,data平级
    beforeCreate(){
        // console.log(this.count);
    },
    created(){
        // console.log("liveCycle组件被创建了");
    },
    mounted(){
        // console.log("liveCycle组件被挂载了");

    },
    // 组件被重新渲染
    updated(){
        console.log("组件被重新渲染");
    },
    unmounted(){
        console.log("liveCycle组件被销毁了");

    }
}
</script>