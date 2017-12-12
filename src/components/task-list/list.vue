<template>
  <div class = "tasks-list">
    <draggable v-model="tasksList" class="task-list">
      <article class="message is-small" v-for="task in tasksList">
        <taskItem v-show="filteredTask.includes(task)"
                  :task="task"
                  :showDueDate="selectedDate === ''"
                  @delete="deleteTask"
                  @changeStatus="changeStatus"
                  @update="updateTask"/>
      </article>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import taskItem from './task-item'

export default {
  name: "tasks-list",
  props: {
    tasks: {
      type: Array,
      default: []
    },
    filterData: {
      type: Object,
      default() {
        return {
          isCompletedChecked: false,
          isToDoChecked: false
        }
      }
    },
    selectedDate: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      enteredTask: ''
    }
  },
  methods: {
    deleteTask(id){
      this.$emit("deleteTask", id);
    },
    changeStatus(id){
      this.$emit("changeStatus", id);
    },
    updateTask(task){
      this.$emit("updateTask", task);
    }
  },
  components: {
    draggable,
    taskItem
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
    filterByStatus() {
      let result = this.tasks;
      result = this.filterData.isCompletedChecked === true ?
               result.filter(x => x.isComplete === true) : result;
      result = this.filterData.isToDoChecked === true ?
               result.filter(x => x.isComplete === false) : result;
      return result;
    },
    filterByDate() {
      return this.tasks.filter(x => x.dueDate === this.selectedDate);
    },
    filteredTask() {
      return (this.selectedDate !== "")?
      this.filterByDate : this.filterByStatus;
    }
  }
}
</script>
