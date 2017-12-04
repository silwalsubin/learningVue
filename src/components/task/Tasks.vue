<template>
  <div id="tasks">
    <statusReporter :status="tasksStatus"/>
    <tasks-list :tasks="tasks"
               @addTask="addTask"
               @deleteTask="deleteTask"
               @taskCompletionStatus="taskCompletionStatus"
               @updateTask="updateTask"/>
  </div>
</template>

<script>

import statusReporter from '../status-reporter'
import tasksList from './tasks-list'
import store from '../../store'

export default {
  name: 'tasks',
  methods: {
    addTask(name){
      this.$store.dispatch('addTask', name).then(() => {
        let message = `Task ${name} added successfully`
        this.$toasted.show(message, {
                                 theme: "primary",
                                 position: "bottom-right",
                                 duration : 5000
                              });
      });
    },
    deleteTask(id){
      this.$store.dispatch('deleteTask', id).then(() => {
        let message = `Task ${this.tasks.find(x => x.id === id).name}
                       deleted successfully`
        this.$toasted.show(message, {
                                 theme: "primary",
                                 position: "bottom-right",
                                 duration : 5000
                              });
      });
    },
    taskCompletionStatus(id){
      this.$store.dispatch('changeTaskStatus', id).then(() => {
        let task = this.tasks.find(x => x.id === id)
        let completionStatus = task.isComplete? "complete": "toDo";
        let message = `Status of task ${task.name} successfully
                       set to "${completionStatus}"`;
        this.$toasted.show(message, {
                                theme: "primary",
                                position: "bottom-right",
                                duration : 5000
                              });
      });
    },
    updateTask(task){
      var originalName = `${this.tasks.find(x => x.id === task.id).name}`;
      this.$store.dispatch('updateTask', task).then(() => {
        let message = `Task name successfully updated to ${task.name}`;
        this.$toasted.show(message, {
                                 theme: "primary",
                                 position: "bottom-right",
                                 duration : 5000
                              });
      });
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    tasksStatus(){
      return this.$store.getters.getTasksStatusReport;
    }
  },
  store,
  components: {
    statusReporter,
    tasksList
  }
}
store.dispatch('getTasksData');
</script>

<style scoped>
@import "../../../node_modules/bulma/css/bulma.css";

</style>
