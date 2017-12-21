<template>
  <div>
    <head>
      <meta name="google-signin-client_id"
       content= "817728938926-ctui6aa8ri3ge1tjltd396h8qtars40s.apps.googleusercontent.com">
    </head>
    <div id="app">
      <appHeader/>
      <appLayout/>
    </div>
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
