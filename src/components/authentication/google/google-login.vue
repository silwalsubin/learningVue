<template>
  <div>
    <div :id='id'></div>
  </div>
</template>

<script >
  import googleApiHandler from './google-api-handler';
  export default {
    name: 'google-login',
    data(){
      return {
        id: 'google-sign-in-button',
        buttonConfig: {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': this.onSuccess,
          'onfailure': this.onFailure
        }
      }
    },
    methods: {
      onFailure(error) {
        console.log(error);
      },
      onSuccess() {
        this.$emit('success', googleApiHandler.getCurrentUser());
      }
    },
    mounted() {
        googleApiHandler.renderButton(this.id, this.buttonConfig);
    }
  }
</script>
