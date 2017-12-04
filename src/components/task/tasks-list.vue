<template>
  <div class = "tasks-list">
    <span class="inputTask">
      <input class="input" type="text" v-model="enteredTask" placeholder="Enter a task"/>
      <button class = "button is-success" @click="addTask">Add</button>
    </span>
    <div class="taskList">
      <article class="message is-small" v-for="task in tasks">
        <div class="message-header">
          <input class="input message-header taskNameInput" @input="updateTask(task)"
                 type="text" v-model="task.name"/>
          <div class="buttons has-addons">
            <span :class="getDoneTodoCss(task)" @click="changeStatus(task)">
              {{task.isComplete ? "ToDo" : "Done"}}
            </span>
            <span class="deleteButton button is-danger is-inverted" @click="deleteTask(task)">
              Delete
            </span>
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
      enteredTask: '',
      inputBoxCssValue: '',
      textBoxReadOnly: true
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
    changeStatus(task){
        this.$emit("taskCompletionStatus", task.id);
        this.enteredTask = '';
    },
    changeTextBoxCss(){
      this.inputBoxCssValue = 'input message-header';
    },
    getDoneTodoCss(task){
      return task.isComplete === false ?
      "button is-success" : "button is-warning";
    },
    updateTask(task){
      this.$emit("updateTask", task);
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

.taskNameInput {
  border: none;
}

.taskNameInput:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.taskNameInput:focus {
  border: none;
}

.taskList{
  margin-top: 20px;
}

article {
  max-width: 460px;
  margin: auto;
}
</style>
