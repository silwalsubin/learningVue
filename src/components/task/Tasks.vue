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
import notify from '../../notification'
export default {
  name: 'tasks',
  methods: {
    addTask(name){
      this.$store.dispatch('addTask', name).then(() => {
        let message = `Task ${name} added successfully.`
        notify(message, this.$toasted);
      });
    },
    deleteTask(id){
      this.$store.dispatch('deleteTask', id).then(() => {
        let message = `Task ${this.tasks.find(x => x.id === id).name}
                       deleted successfully.`
        notify(message, this.$toasted);
      });
    },
    taskCompletionStatus(id){
      this.$store.dispatch('changeTaskStatus', id).then(() => {
        let task = this.tasks.find(x => x.id === id)
        let completionStatus = !task.isComplete? "done": "toDo";
        let message = `Task ${task.name} successfully
                       set to "${completionStatus}."`;
        notify(message, this.$toasted);
      });
    },
    updateTask(task){
      var originalName = `${this.tasks.find(x => x.id === task.id).name}`;
      this.$store.dispatch('updateTask', task).then(() => {
        let message = `Task name successfully updated to ${task.name}.`;
        notify(message, this.$toasted);
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
