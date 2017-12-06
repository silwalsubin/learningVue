<template>
  <div id="app">
    <img src="./assets/myApp.png">
    <welcome/>
    <tasks/>
  </div>
</template>

<script>
import welcome from './components/welcome'
import tasks from './components/task/tasks'


export default {
  name: 'app',
  components: {
    welcome,
    tasks
  }
}
</script>

<style lang="scss">
@import './assets/app.scss';
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
