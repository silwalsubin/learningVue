<template>
  <div>
  <p v-show="tasks.length === 0 && this.selectedDate === ''">No Tasks to Show. Create a new Task.</p>
  <list :tasks="tasks"
        :filterData="filterData"
        :selected-date="selectedDate"
        @deleteTask="deleteTask"
        @changeStatus="changeStatus"
        @updateTask="updateTask"
        @changeOrder="changeOrder"/>
  </div>
</template>

<script>
import list from './list'
import notify from '../../notification'

export default {
  name: 'list-layout',
  props: {
    selectedDate: {
      type: String,
      default: ""
    },
    filterData: {
      type: Object,
      default() {
        return {
          isCompletedChecked: false,
          isToDoChecked: false
        }
      }
    }
  },
  methods: {
    changeOrder(updatedList){
      this.$store.dispatch('changeOrder', updatedList);
    },
    changeStatus(id){
      this.$store.dispatch('changeStatus', id);
    },
    deleteTask(id){
      let taskName = this.tasks.find(x => x.id === id).name;
      this.$store.dispatch('deleteTask', id).then(() => {
        notify(`Task ${taskName} deleted successfully.`);
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
    }
  },
  components: {
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
