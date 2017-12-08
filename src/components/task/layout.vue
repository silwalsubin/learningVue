<template>
  <div id="tasks">
    <statusReporter :status="tasksStatus"/>
    <list :tasks="tasks"
            @addTask="addTask"
            @deleteTask="deleteTask"
            @changeStatus="changeStatus"
            @updateTask="updateTask"
            @changeOrder="changeOrder"/>
  </div>
</template>

<script>
import statusReporter from '../status-report/status-reporter'
import list from './list'
import notify from '../../notification'

export default {
  name: 'tasks',
  methods: {
    addTask(name){
      this.$store.dispatch('addTask', name).then(() => {
        let message = `Task ${name} added successfully.`
        notify(message);
      });
    },
    changeOrder(updatedList){
      this.$store.dispatch('changeOrder', updatedList);
    },
    changeStatus(id){
      this.$store.dispatch('changeStatus', id);
    },
    deleteTask(id){
      this.$store.dispatch('deleteTask', id).then(() => {
        let message = `Task ${this.tasks.find(x => x.id === id).name}
                       deleted successfully.`
        notify(message);
      });
    },
    updateTask(task){
      var originalName = `${this.tasks.find(x => x.id === task.id).name}`;
      this.$store.dispatch('updateTask', task);
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
  components: {
    statusReporter,
    list
  },
  mounted(){
    this.$store.dispatch('getTasksData');
  }
}
</script>

<style lang="scss">
@import './assets/tasks.scss';
</style>
