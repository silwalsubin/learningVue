<template>
  <div id="app">
    <img src="./assets/myApp.png">
    <welcome></welcome>
    <h3 v-bind:title = "msg">{{ msg }} : {{taskCounter}}</h3>
    <tasksToDo v-on:taskCreated="tasksAdded" v-on:taskDeleted="tasksRemoved"></tasksToDo>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import TasksToDo from './components/TasksToDo'
export default {
  name: 'app',
  data() {
    return {
        msg: "Number of Task (s)",
        taskCounter: 0
    }
  },
  components: {
    Welcome,
    TasksToDo
  },
  methods:{
    tasksAdded: function(){
        this.taskCounter++;
    },
    tasksRemoved: function(){
        this.taskCounter--;
    }
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
