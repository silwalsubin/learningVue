<template>
  <calendar :tasks="tasks"
            @changeStatus="changeStatus"
            @deleteTask="deleteTask"
            @updateTask="updateTask"/>
</template>

<script>
  import calendar from './calendar'
  export default {
    methods: {
      changeStatus(id){
        this.$store.dispatch('changeStatus', id);
      },
      deleteTask(id){
        this.$store.dispatch('deleteTask', id);
      },
      updateTask(task){
        this.$store.dispatch('updateTask', task);
      }
    },
    computed: {
      tasks() {
        return this.$store.getters.getTasks;
      }
    },
    components: {
      calendar
    }
  }
</script>
