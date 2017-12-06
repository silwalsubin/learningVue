<template>
  <div class = "tasks-list">
    <span class="inputTask">
      <input class="input" type="text" v-model="enteredTask"
              @keyup.enter="addTask" placeholder="Enter a task"/>
      <button class = "button is-success" @click="addTask">Add</button>
    </span>
    <div id="listOfTasks" class="task-list">
      <article class="message is-small" v-for="task in tasks">
        <div class="message-header">
          <input class="input message-header task-name-input"
                  @input="updateTask(task)" type="text" v-model="task.name"/>
          <div class="buttons has-addons">
            <span :class="getDoneTodoCss(task)" @click="changeStatus(task)">
                    {{task.isComplete ? "ToDo" : "Done"}}</span>
            <span class="deleteButton button is-danger is-inverted"
                    @click="deleteTask(task)">Delete</span>
            <span class="button dragHandle">Move</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>


<script>
import sortable from 'sortablejs'

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
      if (this.enteredTask !== ''){
        this.$emit("addTask", this.enteredTask);
        this.enteredTask = '';
      }
    },
    deleteTask(task){
      this.$emit("deleteTask", task.id);
      this.enteredTask = '';
    },
    changeStatus(task){
      this.$emit("taskCompletionStatus", task.id);
      this.enteredTask = '';
    },
    getDoneTodoCss(task){
      return task.isComplete === false ?
      "button is-success" : "button is-warning";
    },
    updateTask(task){
      this.$emit("updateTask", task);
    }
  },
  mounted(){
    var el = document.getElementById('listOfTasks');
    sortable.create(el, {
      handle: ".dragHandle",
      animation: 150
    });
  }
}
</script>
