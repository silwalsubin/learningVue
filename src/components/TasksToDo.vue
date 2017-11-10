<template>
  <div class = "tasksToDo">
    <form v-on:submit="createTask">
        <input type="text" v-model="enteredTask" placeholder="Enter a task"/>
        <button type="submit">Enter</button>
    </form>
    <ul v-for="task in tasks">
        <li>{{task.name}}</li>
        <button v-on:click="deleteTask(task)">Delete</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tasksToDo",
  data () {
    return {
      tasks: [ ],
      enteredTask: ""
    }
  },
  methods: {
    createTask: function(e){
        this.tasks.push({name:this.enteredTask});
        this.enteredTask = '';
        e.preventDefault();
        this.$emit('taskCreated');
    },
    deleteTask: function(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.$emit('taskDeleted');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
