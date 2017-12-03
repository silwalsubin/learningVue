<template>
  <nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">To Do</p>
      <p class="title toDo">{{status.toDo}}</p>
    </div>
  </div>
  <div class="level-item has-text-centered" >
    <div class="completion">
      <p class="heading">Done</p>
      <p class="title complete completion">{{status.complete}}</p>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'status-reporter',
  props:{
    status: {
      type: Object,
      default() {
        return {
          complete: 0,
          toDo: 0,
          total: 0
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../node_modules/bulma/css/bulma.css";

.completion {
  color: green;
}
</style>
