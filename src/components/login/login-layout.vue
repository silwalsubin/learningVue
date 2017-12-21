<template>
  <div>
    <googleLogin @success="onSuccess()"/>
  </div>
</template>

<script>
import googleLogin from './google-login'
export default {
  methods: {
    onSuccess(){
      this.$store.dispatch('logUserIn');
    }
  },
  components: {
    googleLogin
  }
}
</script>
