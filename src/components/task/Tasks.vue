<template>
  <div id="tasks">
    <statusReporter :status="tasksStatus"/>
    <tasks-list :tasks="tasks"
            @addTask="addTask"
            @deleteTask="deleteTask"
            @taskCompletionStatus="taskCompletionStatus"
            @updateTask="updateTask"
            @changeOrder="setTasks"/>
    <tasksFooter :isShowCompleteChecked = "isShowCompleteChecked"
                 :isToDoChecked = "isToDoChecked"
                 @showCompleted="showCompletedToggle"
                 @showToDo="showToDoToggle"/>
  </div>
</template>

<script>
import statusReporter from '../status-report/status-reporter'
import tasksList from './tasks-list'
import tasksFooter from './tasks-footer'
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
    deleteTask(id){
      this.$store.dispatch('deleteTask', id).then(() => {
        let message = `Task ${this.tasks.find(x => x.id === id).name}
                       deleted successfully.`
        notify(message);
      });
    },
    setTasks(updatedList){
      this.$store.dispatch('setTasks', updatedList);
    },
    showCompletedToggle(){
      this.isToDoChecked = false;
      this.isShowCompleteChecked = !this.isShowCompleteChecked;
    },
    showToDoToggle(){
      this.isShowCompleteChecked = false;
      this.isToDoChecked = !this.isToDoChecked;
    },
    taskCompletionStatus(id){
      this.$store.dispatch('changeTaskStatus', id).then(() => {
        let task = this.tasks.find(x => x.id === id)
        let completionStatus = !task.isComplete? "done": "toDo";
        let message = `Task ${task.name} successfully
                       set to "${completionStatus}."`;
        notify(message);
      });
    },
    updateTask(task){
      var originalName = `${this.tasks.find(x => x.id === task.id).name}`;
      this.$store.dispatch('updateTask', task).then(() => {
        let message = `Task name successfully updated to ${task.name}.`;
        notify(message);
      });
    }
  },
  computed: {
    getTasks() {
      if (this.isShowCompleteChecked === true){
        return this.$store.getters.getTasks.filter(x => x.isComplete === true);
      }
      if (this.isToDoChecked === true){
        return this.$store.getters.getTasks.filter(x => x.isComplete === false);
      }
      return this.$store.getters.getTasks;
    },
    tasks() {
      return this.getTasks;
    },
    tasksStatus(){
      return this.$store.getters.getTasksStatusReport;
    }
  },
  components: {
    statusReporter,
    tasksList,
    tasksFooter
  },
  data() {
    return {
      isShowCompleteChecked: false,
      isToDoChecked: false
    }
  },
  mounted(){
    this.$store.dispatch('getTasksData');
  }
}
</script>

<style lang="scss">
@import './assets/tasks.scss';
</style>
