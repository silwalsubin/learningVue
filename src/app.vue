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
  },
  created() {
    // if (!window.gapi){
    //   let s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.src = "https://apis.google.com/js/platform.js?onload=onLoadCallback";
    //   s.async = true;
    //   s.defer = "defer";
    //   document.getElementById('app').appendChild(s);
    //   if (!window.gapi){
    //     console.log("asdfasdfsadf");
    //   }
    //   //this.$el.appendChild(s);
    //
    // }
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
