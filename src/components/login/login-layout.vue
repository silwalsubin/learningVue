<template>
  <div>
    <googleLogin @success="onSuccess"/>
  </div>
</template>

<script>
import googleLogin from '../authentication/google/google-login'
export default {
  methods: {
    onSuccess(user){
      this.$store.dispatch('logUserIn', user);
    }
  },
  components: {
    googleLogin
  }
}
</script>
