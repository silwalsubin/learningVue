<template>
  <section class = "hero welcome">
    <div class="hero-body">
    <div class="container">
      <h1 class="title" v-bind:title = "msg">{{ msg }}</h1>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: "Welcome to To-Do App"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../node_modules/bulma/css/bulma.css";

</style>
