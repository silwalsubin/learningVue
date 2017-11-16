<template>
  <div class = "tasksReporter">
    <h3 v-show="tasks.length > 0" :title = "totalMsg">{{ totalMsg }}</h3>
    <h4 v-show="tasks.length > 0" :title = "description">{{ description }}</h4>
  </div>
</template>

<script>
export default {
  name: 'tasksReporter',
  props:['tasks'],
  computed: {
    totalMsg(){
      let counter = this.tasks.length;
      let plural = counter > 1 ? "s" : "";
      return `Number of Task${plural} : ${counter}`;
    },
    description(){
      let completedTasks = this.tasks.filter(x => x.isComplete == true).length;
      let incompleteTasks = this.tasks.length - completedTasks;
      return `Done : ${completedTasks} || To Do: ${incompleteTasks}`;
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
