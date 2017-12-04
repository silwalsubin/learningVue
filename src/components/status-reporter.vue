<template>
  <nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">To-Do</p>
      <p class="title toDo todo-column">{{status.toDo}}</p>
    </div>
  </div>
  <div class="level-item has-text-centered" >
    <div class="completion">
      <p class="heading">Done</p>
      <p class="title complete done-column">{{status.complete}}</p>
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


<style scoped>
.heading {
  font-size: 20px;
}

.done-column {
  color: green;
  font-size: 60px;
  text-shadow: 2px 2px #a39c9c;
}

.todo-column {
  color: #e5bd44;
  font-size: 60px;
  text-shadow: 2px 2px #a39c9c;
}

</style>
