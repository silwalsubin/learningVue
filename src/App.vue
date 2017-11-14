<template>
  <div id="app">
    <img src="./assets/myApp.png">
    <welcome></welcome>
    <h3 v-show="taskCounter > 0" v-bind:title = "msg">{{ msg }} : {{taskCounter}}</h3>
    <tasksToDo></tasksToDo>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import TasksToDo from './components/TasksToDo'
import store from './store'

export default {
  name: 'app',
  data() {
    return {
        msg: "Number of Task (s)"
    }
  },
  computed: {
    taskCounter : function(){
      return this.$store.getters.getTasks.length;
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
