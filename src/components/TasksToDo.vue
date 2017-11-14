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

import store from '../store'
export default {
  name: "tasksToDo",
  data () {
    return {
      enteredTask: ""
    }
  },
  computed: {
    tasks: function(){
      return this.$store.getters.getTasks;
    }
  },
  methods: {
    createTask: function(e){
        this.$store.dispatch('addTask', {name:this.enteredTask});
        this.enteredTask = '';
        e.preventDefault();
    },
    deleteTask: function(task){
        this.$store.dispatch('removeTask', task);
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
