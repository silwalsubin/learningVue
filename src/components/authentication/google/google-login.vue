<template>
  <div class="google-button">
    <div id="my-signin2"></div>
  </div>
</template>

<script >
  import scriptLoader from 'scriptjs';
  let url = 'https://apis.google.com/js/platform.js?onload=onLoadCallback';

  export default {
    name: 'google-login',
    methods: {
      renderButton() {
          scriptLoader(url, () => {
            gapi.signin2.render('my-signin2', {
              'scope': 'profile email',
              'width': 240,
              'height': 50,
              'longtitle': true,
              'theme': 'dark',
              'onsuccess': this.onSuccess,
              'onfailure': this.onFailure
            });
          })
      },
      onFailure(error) {
        console.log(error);
      },
      onSuccess(googleUser) {
        let userInstance = gapi.auth2.getAuthInstance();
        if (userInstance.isSignedIn.get()) {
          var profile = userInstance.currentUser.get().getBasicProfile();
        }
        let user = {
          id : profile.getId(),
          firstName: profile.getGivenName(),
          lastName: profile.getFamilyName(),
          imageURL: profile.getImageUrl(),
          email: profile.getEmail()
        }
        this.$emit('success', user);
      }
    },
    mounted() {
        this.renderButton();
    }
  }
</script>
