<template>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img :src="user.imageURL" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Hi {{user.firstName}}</strong>
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <googleLogout @logOut="logOut()"/>
        </div>
      </nav>
    </div>
  </article>
</div>
</template>

<script>

import googleLogout from '../authentication/google/google-logout'
export default {
  methods: {
    logOut(){
        this.$store.dispatch('logUserOut');
    }
  },
  computed:{
    user(){
      return this.$store.getters.getUser;
    }
  },
  components: {
    googleLogout
  }
}
</script>
