<template>
  <div class = "tasksToDo">
    <form v-on:submit="createTask">
        <input type="text" v-model="enteredTask" placeholder="Enter a task"/>
        <button type="submit">Enter</button>
    </form>
    <h2 v-show = "this.tasks.length > 0"v-bind:title = "msg">{{ msg }}</h2>
    <ul v-for="task in tasks">
        <li>{{task.name}}</li>
        <button v-on:click="deleteTask(task)">Delete</button>
    </ul>    
  </div>
</template>

<script>
export default {
  name: 'tasksToDo',
  data () {
    return {
      msg: "Tasks:",
      tasks: [ ],
      enteredTask: ''
    }
  },
  methods: {
    createTask: function(e){        
        this.tasks.push({name:this.enteredTask}); 
        this.enteredTask = '';
        e.preventDefault();
    }, 
    deleteTask: function(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
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
