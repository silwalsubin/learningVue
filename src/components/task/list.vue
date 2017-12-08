<template>
  <div class = "tasks-list">
    <entry @addTask="addTask"/>
    <draggable v-model="tasksList" class="task-list">
      <article class="message is-small" v-for="task in tasksList">
        <taskItem v-show="filteredTask.includes(task)"
                  :task="task"
                  @delete="deleteTask"
                  @changeStatus="changeStatus"
                  @update="updateTask"/>
      </article>
    </draggable>

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
import entry from './entry'


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
    addTask(task){
      this.$emit("addTask", task);
    },
    deleteTask(id){
      this.$emit("deleteTask", id);
    },
    changeStatus(id){
      this.$emit("changeStatus", id);
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
    taskFooter,
    entry
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
