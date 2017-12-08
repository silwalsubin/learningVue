<template>
  <div class="message-header" >
    <input class="input message-header task-name-input"
           @blur="updateTask(task)" type="text" v-model="task.name"/>
    <div class="buttons has-addons">
      <span :class="getDoneTodoCss(task)" @click="changeStatus(task)">
              {{task.isComplete ? "ToDo" : "Done"}}</span>
      <span class="deleteButton button is-danger is-inverted"
              @click="deleteTask(task)">Delete</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "taskItem",
  props: {
    task : {
      type: Object
    }
  },
  methods: {
    deleteTask(task){
      this.$emit("delete", task.id);
    },
    changeStatus(task){
      this.$emit("changeStatus", task.id);
    },
    getDoneTodoCss(task){
      return task.isComplete === false ?
      "button is-success" : "button is-warning";
    },
    updateTask(task){
        this.$emit("update", task);
    }
  }
}
</script>
