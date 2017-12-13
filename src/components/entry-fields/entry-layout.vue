<template>
  <entry :showDueDateInput="showDueDateInput"
         :externalDueDate="externalDueDate"
         @addTask="addTask"/>
</template>

<script>
import entry from './entry'
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
    entry
  }
}
</script>
