<template>
  <h1>App组件</h1><hr>
  <Todoinput @add="onAddNewTask"></Todoinput>
  <TodoList :list="taskList" class="mt-3"></TodoList>
  <TodoButton :active="activeBtnIndex" @updata:active="setActive"></TodoButton>
</template>
<script>
// 导入组件
import TodoList from './components/todo-list/TodoList.vue';
import Todoinput from './components/todo-input/TodoInput.vue';
import TodoButton from './components/todo-button/TodoButton.vue';

export default {
  name:"MyApp",
  // 定义数据
  data(){
    return{
      // 任务列表的数据
      todolist:[
        {id:1,task:'周一早晨9点开会',done:false},
        {id:2,task:'周一晚上8点聚餐',done:false},
        {id:3,task:'准备周三上午的演讲稿',done:true},
      ],
      // 下一个id可用值
      nextId:0,
      // 激活项索引值
      activeBtnIndex:0
    }
  },
  // 定义方法
  methods:{
    onAddNewTask(taskname){
      // 添加一个成员
      this.todolist.push({
        id:this.nextId,
        task:taskname,
        done:false
      });
      // 更新可用id
      this.nextId = this.todolist.length+1;
    },
    setActive(n){
      this.activeBtnIndex = n;
    }
  },
  // 注册组件
  components:{
    TodoList,
    Todoinput,
    TodoButton
  },
  // 计算属性
  computed:{
    taskList(){
      switch(this.activeBtnIndex){
        case 0:
          return this.todolist;
        case 1:
          return this.todolist.filter(x => x.done);
        case 2:
          return this.todolist.filter(x => !x.done);
      }
    }
  },
  // 在data数据缓存后设置nextId值
  created(){
    this.nextId = this.todolist.length+1;
  }
}
</script>
<style lang="less" scoped>

</style>