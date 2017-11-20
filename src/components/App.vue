<template>
  <div id="app">
    <img src="../assets/myApp.png">
    <welcome/>
    <tasks/>
  </div>
</template>

<script>
import Welcome from './Welcome'
import Tasks from './Tasks'

export default {
  name: 'app',
  components: {
    Welcome,
    Tasks
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
