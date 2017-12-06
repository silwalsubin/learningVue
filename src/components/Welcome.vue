<template>
  <section class = "hero welcome">
    <div class="hero-body">
    <div class="container">
      <h1 class="heading" v-bind:title = "msg">{{ msg }}</h1>
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
