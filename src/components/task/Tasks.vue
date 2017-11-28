<template>
  <div id="tasks">
    <statusReporter :status="tasksStatus"/>
    <tasks-list :tasks="tasks"
               @addTask="addTask"
               @deleteTask="deleteTask"
               @taskCompletionStatus="taskCompletionStatus"/>
  </div>
</template>

<script>

import statusReporter from '../status-reporter'
import tasksList from './tasks-list'
import store from '../../store'

export default {
  name: 'tasks',
  methods: {
    addTask(task){
      this.$store.dispatch('addTask', task);
    },
    deleteTask(task){
      this.$store.dispatch('deleteTask', task);
    },
    taskCompletionStatus(task){
      this.$store.dispatch('changeTaskStatus', task);
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

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  font-weight: normal;
  font-family: "Times New Roman", Times, serif;
}
</style>
