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
          <taskItem v-show="filteredTask.includes(task)"
                    :task="task"
                    @delete="deleteTask"
                    @changeStatus="changeStatus"
                    @update="updateTask"/>
        </article>
      </draggable>
    </div>
    <taskFooter :isCompletedChecked="isCompletedChecked"
                 :isToDoChecked="isToDoChecked"
                 @showCompleted="showCompletedToggle"
                 @showToDo="showToDoToggle"/>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import taskFooter from './tasks-footer'
import taskItem from './task-item'

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
    deleteTask(id){
      this.$emit("deleteTask", id);
      this.enteredTask = '';
    },
    changeStatus(id){
      this.$emit("changeStatus", id);
      this.enteredTask = '';
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
    taskItem,
    taskFooter
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
