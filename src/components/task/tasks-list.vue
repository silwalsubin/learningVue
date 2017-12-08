<template>
  <div class = "tasks-list">
    <span class="inputTask">
      <input class="input" type="text" v-model="enteredTask"
              @keyup.enter="addTask" placeholder="Enter a task"/>
      <button class = "button is-success" @click="addTask">Add</button>
    </span>
    <div id="listOfTasks" class="task-list">
      <draggable v-model="tasksList">
        <article class="message is-small" v-for="task in tasksList">
          <div class="message-header" v-show="filteredTask.includes(task)">
            <input class="input message-header task-name-input"
                    @input="updateTask(task)" type="text" v-model="task.name"/>
            <div class="buttons has-addons">
              <span :class="getDoneTodoCss(task)" @click="changeStatus(task)">
                      {{task.isComplete ? "ToDo" : "Done"}}</span>
              <span class="deleteButton button is-danger is-inverted"
                      @click="deleteTask(task)">Delete</span>
            </div>
          </div>
        </article>
      </draggable>
    </div>
    <tasksFooter :isCompletedChecked = "isCompletedChecked"
                 :isToDoChecked = "isToDoChecked"
                 @showCompleted="showCompletedToggle"
                 @showToDo="showToDoToggle"/>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import tasksFooter from './tasks-footer'

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
      isCompletedChecked: false,
      isToDoChecked: false
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
      this.$emit("changeStatus", task.id);
      this.enteredTask = '';
    },
    getDoneTodoCss(task){
      return task.isComplete === false ?
      "button is-success" : "button is-warning";
    },
    updateTask(task){
      this.$emit("updateTask", task);
    },
    showCompletedToggle(){
      this.isToDoChecked = false;
      this.isCompletedChecked = !this.isCompletedChecked;
    },
    showToDoToggle(){
      this.isCompletedChecked = false;
      this.isToDoChecked = !this.isToDoChecked;
    },
  },
  components: {
    draggable,
    tasksFooter
  },
  computed: {
    tasksList: {
      get() {
        return this.tasks
      },
      set(value) {
        this.$emit("changeOrder", value);
      }
    },
    filteredTask() {
      let result = this.tasks;
      result = this.isCompletedChecked === true ?
               result.filter(x => x.isComplete === true) : result;
      result = this.isToDoChecked === true ?
               result.filter(x => x.isComplete === false) : result;
      return result;
    }
  }
}
</script>
