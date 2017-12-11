<template>
<div>
  <entry @addTask="addTask"/>
  <div id="layout" class="tile is-ancestor">
    <div class="tile is-parent">
      <list class="tile is-child box" :tasks="tasks"
              :isCompletedChecked="isCompletedChecked"
              :isToDoChecked="isToDoChecked"
              @addTask="addTask"
              @deleteTask="deleteTask"
              @changeStatus="changeStatus"
              @updateTask="updateTask"
              @changeOrder="changeOrder"/>
    </div>
    <div class="tile is-6 is-vertical is-parent">
      <div class="tile is-child box calendar-box">
        <calendar :tasks="tasks"/>
      </div>
      <div class="tile is-child box">
        <statusReporter :status="tasksStatus"/>
      </div>

    </div>
  </div>
  <taskFooter :isCompletedChecked="isCompletedChecked"
               :isToDoChecked="isToDoChecked"
               @showCompleted="showCompletedToggle"
               @showToDo="showToDoToggle"/>
</div>
</template>

<script>
import statusReporter from '../status-report/status-reporter'
import list from './list'
import notify from '../../notification'
import calendar from '../calendar/calendar'
import entry from './entry'
import taskFooter from './tasks-footer'

export default {
  name: 'layout',
  data () {
    return {
      isCompletedChecked: false,
      isToDoChecked: false
    }
  },
  methods: {
    addTask(task){
      this.$store.dispatch('addTask', task).then(() => {
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
    showCompletedToggle(){
      this.isToDoChecked = false;
      this.isCompletedChecked = !this.isCompletedChecked;
    },
    showToDoToggle(){
      this.isCompletedChecked = false;
      this.isToDoChecked = !this.isToDoChecked;
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
    calendar,
    list,
    entry,
    taskFooter
  },
  mounted(){
    this.$store.dispatch('getTasksData');
  }
}
</script>

<style lang="scss">
@import './assets/tasks.scss';
</style>
