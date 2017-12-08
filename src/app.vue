<template>
  <div id="app">
    <img src="./assets/img/myApp.png">
    <welcome/>
    <layout/>
  </div>
</template>

<script>
import welcome from './components/welcome'
import layout from './components/task/layout'


export default {
  name: 'app',
  components: {
    welcome,
    layout
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
