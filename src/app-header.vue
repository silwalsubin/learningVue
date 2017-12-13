<template>
  <div>
    <section class = "hero">
      <div class="hero-body">
      <div class="container">
        <h1 class="heading" v-bind:title = "msg">{{ msg }}</h1>
      </div>
    </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: "To-Do App"
    }
  }
}
</script>
