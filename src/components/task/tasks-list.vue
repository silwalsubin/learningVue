<template>
  <div class = "tasks-list">
    <span class="inputTask">
      <input class="input" type="text" v-model="enteredTask" placeholder="Enter a task"/>
      <button class = "button is-success" @click="addTask">Add</button>
    </span>
    <div class="taskList">
      <article class="message is-small" v-for="task in tasks">
        <div class="message-header">
          <p>{{task.name}}</p>
          <div class="buttons has-addons">
            <span class="button">Edit</span>
            <span class="button" @click="markCompleteIncomplete(task)">{{task.isComplete ? "Rework" : "Completed"}}</span>
            <span class="button " @click="deleteTask(task)">Delete</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "tasks-list",
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
        this.$emit("addTask", this.enteredTask);
        this.enteredTask = '';
    },
    deleteTask(task){
        this.$emit("deleteTask", task.id);
        this.enteredTask = '';
    },
    markCompleteIncomplete(task){
        this.$emit("taskCompletionStatus", task.id);
        this.enteredTask = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../../node_modules/bulma/css/bulma.css";

.input {
  max-width: 300px;
}


.taskList{
  margin-top: 20px;
}

article {
  max-width: 600px;
  margin: auto;
}
/*
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
*/
</style>
