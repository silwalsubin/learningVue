<template>
  <div class = "tasks-list">
    <span class="inputTask">
      <input class="input" type="text" v-model="enteredTask" placeholder="Enter a task"/>
      <button class = "button is-success" @click="addTask">Add</button>
    </span>
    <div class="taskList">
      <article class="message is-small" v-for="task in tasks">
        <div class="message-header">
          <input :id="task.id" :class="inputBoxCss" type="text" v-model="task.name" :readonly="isTextBoxReadOnly"/>
          <div class="buttons has-addons">
            <span class="editButton button" @click="changeTextBoxCss">Edit</span>
            <span class="changeStatus button" @click="changeStatus(task)">{{task.isComplete ? "Rework" : "Completed"}}</span>
            <span class="deleteButton button" @click="deleteTask(task)">Delete</span>
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
      inputBoxCssValue: 'input message-header inputDisabled',
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
      this.textBoxReadOnly = false;
    }
  },
  computed: {
    inputBoxCss() {
      return this.inputBoxCssValue;
    },
    isTextBoxReadOnly() {
      return this.textBoxReadOnly;
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

.inputDisabled {
  border: none;
}

.taskList{
  margin-top: 20px;
}

article {
  max-width: 600px;
  margin: auto;
}
</style>
