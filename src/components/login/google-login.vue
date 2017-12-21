<template>
  <div class="google-button">
    <div id="my-signin2"></div>
  </div>
</template>

<script >
  import googleApi from './platform'
  import googlePlatform from './googlePlatform'

  export default {
    name: 'google-login',
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
          this.$emit('success');
      }
    },
    mounted() {
      this.renderButton();
      // googleApi.gapiLoadedPromise().then(() => {
      //   console.log("in the dom");
      // }).catch(() => {
      //   console.log("its not in the  dom")
      // });
    }
  }
</script>
