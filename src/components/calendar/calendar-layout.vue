<template>
  <calendar :tasks="tasks"/>
</template>

<script>
  import calendar from './calendar'
  export default {
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
