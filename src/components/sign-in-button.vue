<template>
  <div>
    <button @click="signOut()">Sign out</button>
    <button @click="getProfileInfo()">ProfilInfo</button>
    <button id="signin-button" ref="signinBtn">Sign In </button>
    <div class="g-signin2" googleUser="onSignin()"></div>
  </div>
</template>

<script >
  import googleApi from './platform'
  import googlePlatform from './googlePlatform'

  export default {
    name: 'sign-in-button',
    props: {
      isUserSignedin : {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        url: "https://apis.google.com/js/platform.js",
        user:{}
      }
    },
    methods: {
      appStart(){
        gapi.load(this.user, this.initClient());
      },
      initClient(){
        console.log("is there anybody out there? ")
          this.user = gapi.auth2.init({
            client_id: `817728938926-ctui6aa8ri3ge1tjltd396h8qtars40s.apps.googleusercontent.com`,
            scope: 'profile'
          });
      },
      onSignin(){
        console.log("function called");
      },
      signOut(){
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


      googleApi.gapiLoadedPromise().then(() => {
        console.log("in the dom");
      }).catch(() => {
        console.log("its not in the  dom")
      });
    },
    computed: {
      // isUserSignedin(){
      //   return gapi.auth2.getAuthInstance().isSignedIn.get();
      // }
    }
  }
</script>
