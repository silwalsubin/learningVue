<template>
  <a @click="logOut()">Log Out</a>
</template>

<script>
  export default {
    methods: {
      logOut(){
        let userInstance = gapi.auth2.getAuthInstance();
        if (userInstance.isSignedIn.get()){
          let something = true;
          userInstance.signOut().then(() => {
          this.$emit('logOut');
        })
      }
    }
  }
}
</script>
