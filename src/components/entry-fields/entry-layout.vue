<template>
  <entry v-if="showDueDateInput" @addTask="addTask"/>
  <entryCalendar v-else :dueDate="externalDueDate"  @addTask="addTask"/>
</template>

<script>
import entry from './entry'
import entryCalendar from './entry-calendar'
import notify from '../../notification'
export default {
  props: {
    showDueDateInput: {
      type: Boolean,
      default: true
    },
    externalDueDate: {
      type: String,
      default: ""
    }
  },
  methods: {
    addTask(task){
      this.$store.dispatch('addTask', task);
      this.$emit('taskCreated');
      let message = `Task ${task.name} added successfully.`
      notify(message);
    }
  },
  components: {
    entry,
    entryCalendar
  }
}
</script>
