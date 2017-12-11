<template>
  <div class = "tasks-list">
    <draggable v-model="tasksList" class="task-list">
      <article class="message is-small" v-for="task in tasksList">
        <taskItem v-show="filteredTask.includes(task)"
                  :task="task"
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
    isToDoChecked: {
      type: Boolean,
      default: false
    },
    isCompletedChecked: {
      type: Boolean,
      default: false
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
