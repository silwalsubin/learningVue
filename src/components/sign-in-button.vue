<template>
  <div>
    <button @click="getInfo()">Click Me</button>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
</template>


<!-- <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script> -->



<script >
  import googleApi from './platform'

  function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
    console.log("asdfasdf");
  }

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  };

  export default {
    name: 'sign-in-button',
    data(){
      return {
        url: "https://apis.google.com/js/platform.js"
      }
    },
    methods: {

    },
    mounted() {
      googleApi.gapiLoadedPromise().then(() => {
        console.log("in the dom")
      }).catch(() => {
        console.log("its not in the  dom")
      });
    }
  }
</script>
