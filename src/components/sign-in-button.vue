<template>
  <div>
    <button @click="signOut()">Sign out</button>
    <button @click="getProfileInfo()">ProfilInfo</button>
    <button id="signin-button" ref="signinBtn">Sign In </button>
    <div id="my-signin2"></div>
  </div>
</template>

<script >




  import googleApi from './platform'
  import googlePlatform from './googlePlatform'

  export default {
    name: 'sign-in-button',
    data(){
      return {
        url: "https://apis.google.com/js/platform.js",
        user:{},
        isSignedIn : false
      }
    },
    methods: {
      renderButton() {
        gapi.signin2.render('my-signin2', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': this.onSuccess,
          'onfailure': this.onFailure
        });
      },
      onFailure(error) {
        console.log(error);
      },
      onSuccess(googleUser) {
        this.isUserSignedin = true;
      },
      signOut(){
        this.isUserSignedin = false;
        this.user = gapi.auth2.getAuthInstance();
        if (this.user.isSignedIn.get()){
          this.user.signOut().then(function () {
            console.log('User signed out.');
          });
        }
        else{
          console.log('User already signed out.');
        }
      },
      getProfileInfo(){
        let userInstance = gapi.auth2.getAuthInstance();
        console.log(userInstance.isSignedIn.get());

        if (userInstance.isSignedIn.get()) {
          var profile = userInstance.currentUser.get().getBasicProfile();
          console.log('ID: ' + profile.getId());
          console.log('Full Name: ' + profile.getName());
          console.log('Given Name: ' + profile.getGivenName());
          console.log('Family Name: ' + profile.getFamilyName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
        }
      }
    },
    mounted() {
      this.renderButton();
      googleApi.gapiLoadedPromise().then(() => {
        console.log("in the dom");
      }).catch(() => {
        console.log("its not in the  dom")
      });
    },
    computed: {
      isUserSignedin: {
        get(){
          return this.isSignedIn;
        },
        set(value){
          console.log("hello hello")
          this.$emit('signInStatus', value);
        }
      }
    }
  }
</script>
