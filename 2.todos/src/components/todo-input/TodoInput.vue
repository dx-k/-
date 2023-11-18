<template>
    <!-- form表单-->
    <form class="form-inline" @submit.prevent="onFormSubmit">
        <div class="input-group mb-2 mr-sm-2">
            <!--输入框的前缀-->
            <div class="input-group-prepend">
                <div class="input-group-text">任务</div>
            </div>
            <!--文本输入框-->
            <input 
                type="text" 
                class="form-control" 
                placeholder="请填写任务信息" 
                style="width: 356px;" 
                v-model.trim="taskname"
            />
        </div>
        <!--添加按钮-->
        <button 
            type="submit" 
            class="btn btn-primary mb-2"
        >
            添加新任务
        </button>
    </form>
</template>
<script>
export default {
    name: "TodoInput",
    data(){
        return{
            taskname:''
        }
    },
    emits:['add'],
    methods:{
        // 表单的提交事件处理函数
        onFormSubmit(){
            // 任务名称为空时
            if(!this.taskname)return alert("任务名称不能为空");
            // 使用this.$emit触发父组件自定义事件将数据传递给父组件
            this.$emit('add',this.taskname);
            // 清空taskname
            this.taskname = '';
        }
    }
}
</script>
<style lang="less" scoped></style>