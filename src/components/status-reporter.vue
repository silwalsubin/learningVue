<template>
  <div class = "status-reporter">
    <h3 v-show="status.total > 0"
        :title = "totalReport">{{totalReport}}</h3>
    <h4 v-show="status.total > 0"
        :title = "statusDescription">{{statusDescription}}</h4>
  </div>
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
}
</style>
