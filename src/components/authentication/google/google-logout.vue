<template>
  <a @click="logOut()">Log Out</a>
</template>

<script>
  import googleApiHandler from './google-api-handler';
  export default {
    methods: {
      logOut(){
        googleApiHandler.signOut().then(() => {
          this.$emit('logOut');
        });
    }
  }
}
</script>
