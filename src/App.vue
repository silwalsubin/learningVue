<template>
  <div id="app">
    <img src="./assets/myApp.png">
    <welcome></welcome>
    <tasksToDo></tasksToDo>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import TasksToDo from './components/TasksToDo'
export default {
  name: 'app',
  components: {
    Welcome, 
    TasksToDo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
