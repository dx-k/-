<template>
    <div class="button-container mt-3">
        <div class="btn-group">
            <button 
                type="button" 
                class="btn" 
                :class="active === 0 ? 'btn-primary' : 'btn-secondary'"
                @click="onBtnClick(0)"
            >
                全部
            </button>
            <button 
                type="button" 
                class="btn"
                :class="active === 1 ? 'btn-primary' : 'btn-secondary'"
                @click="onBtnClick(1)"
            >
                已完成
            </button>
            <button 
                type="button" 
                class="btn"
                :class="active === 2 ? 'btn-primary' : 'btn-secondary'"
                @click="onBtnClick(2)"
            >
                未完成
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name:"TodoButton",
    data(){
        return{
            activeBtnIndex:0
        }
    }, 
    emits:['updata:active'],
    props:{
        // 激活项的索引值
        active:{
            type:Number,
            required:true,
            // 默认激活索引值为0的按钮
            default:0
        }
    },
    methods:{
        onBtnClick(n){
            if(n === this.active) return
            this.$emit('updata:active',n)
        }
    }
}
</script>
<style lang="less" scoped>
.button-container{
    width: 400px;
    text-align: center;
}
</style>