<template>
  <div id="app">
    <img src="./assets/myApp.png">
    <welcome></welcome>
    <h3 v-show="taskCounter > 0" :title = "msg">{{ msg }} : {{taskCounter}}</h3>
    <tasksToDo :tasks="tasks" @addTask="addTask" @deleteTask="deleteTask" @taskCompletionStatus="taskCompletionStatus"></tasksToDo>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import TasksToDo from './components/TasksToDo'

export default {
  name: 'app',
  props: ['tasks'],
  methods: {
    addTask(task){
      this.$emit("addTask", task);
    },
    deleteTask(task){
      this.$emit("deleteTask", task);
    },
    taskCompletionStatus(task){
      this.$emit("taskCompletionStatus", task);
    }
  },
  computed: {
    taskCounter(){
      return this.tasks.length;
    },
    msg(){
      let m = "Number of Task";
      return this.tasks.length > 1 ? m + "s" : m;
    }
  },
  components: {
    Welcome,
    TasksToDo
  }
}
</script>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  font-weight: normal;
  font-family: "Times New Roman", Times, serif;
}
</style>
