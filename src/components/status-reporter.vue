<template>
  <nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">To Do</p>
      <p class="title toDo">{{status.toDo}}</p>
    </div>
  </div>
  <div class="level-item has-text-centered" >
    <div>
      <p class="heading">Done</p>
      <p class="title complete">{{status.complete}}</p>
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
  },
  computed: {
    totalReport(){
      return `Number of Task${this.status.total > 1 ? "s" : ""} : ${this.status.total}`;
    },
    statusDescription(){
      return `Done : ${this.status.complete} || To Do: ${this.status.toDo}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../node_modules/bulma/css/bulma.css";
/*
h1, h2, h4 {
  font-weight: normal;
  font-family: "Times New Roman", Times, serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
