<template>
    <button @click="cutover">切换组件</button>
    <!-- keep-alive组件包含的组件不会被销毁 -->
    <!-- 占位组件，如何渲染取决于:is="属性值" -->
    <keep-alive>
        <component :is="this.comName"></component>
    </keep-alive>
</template>
<script>
import B from './b.vue';
import C from './c.vue';

export default {
    name:"A",
    data(){
        return{
            comName:"B"
        }
    },
    components:{
        B,
        C
    },
    methods:{
        cutover(){
            // 修改comName的值即可切换组件
            switch(this.comName){
                case "B":
                    this.comName = "C";
                    return;
                case "C":
                    this.comName = "B";
                    return
                default:
                    this.comName = "B";
                    return;
            }
        }
    }
}
</script>