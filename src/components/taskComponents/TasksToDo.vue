<template>
  <div class = "tasksToDo">
      <input type="text" v-model="enteredTask" placeholder="Enter a task"/>
      <button @click="addTask">Add</button>
    <ul v-for="task in tasks">
        <li>{{task.name}}</li>
        <button @click="markCompleteIncomplete(task)">{{task.isComplete ? "Rework" : "Completed"}}</button>
        <button @click="deleteTask(task)">Delete</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tasksToDo",
  props: {
    tasks: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      enteredTask: ''
    }
  },
  methods: {
    addTask(){
        this.$emit("addTask", {name:this.enteredTask, isComplete: false});
        this.enteredTask = '';
    },
    deleteTask(task){
        this.$emit("deleteTask", task);
        this.enteredTask = '';
    },
    markCompleteIncomplete(task){
        this.$emit("taskCompletionStatus", task);
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
