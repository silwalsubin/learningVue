<template>
  <div id="app">
    <img src="../assets/myApp.png">
    <welcome></welcome>
    <statusReporter :status="tasksStatus"></statusReporter>
    <tasksToDo :tasks="tasks" @addTask="addTask" @deleteTask="deleteTask" @taskCompletionStatus="taskCompletionStatus"></tasksToDo>
  </div>
</template>

<script>
import Welcome from './Welcome'
import StatusReporter from './sharedComponents/StatusReporter'
import TasksToDo from './taskComponents/TasksToDo'

export default {
  name: 'app',
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
    tasks() {
      return this.$store.getters.getTasks;
    },
    tasksStatus(){
      return this.$store.getters.getTasksStatusReport;
    }
  },
  components: {
    Welcome,
    StatusReporter,
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
