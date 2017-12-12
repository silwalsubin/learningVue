<template>
  <div id="app">
    <appHeader/>
    <appLayout/>
  </div>
</template>

<script>
import appHeader from './app-header'
import appLayout from './app-layout'

export default {
  name: 'app',
  components: {
    appHeader,
    appLayout
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
