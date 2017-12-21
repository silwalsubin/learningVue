<template>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <button class="button" @click="logOut()">Log Out</button>
          <button class="button" @click="getProfileInfo()">Info</button>
        </div>
      </nav>
    </div>
  </article>
</div>
</template>

<script>
export default {
  methods: {
    logOut(){
      let userInstance = gapi.auth2.getAuthInstance();
      if (userInstance.isSignedIn.get()){
        let something = true;
        userInstance.signOut().then(() => {
        this.$store.dispatch('logUserOut');
      })
    }
  },
    getProfileInfo(){
      let userInstance = gapi.auth2.getAuthInstance();
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
  }
}
</script>
