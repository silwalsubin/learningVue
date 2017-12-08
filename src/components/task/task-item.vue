<template>
  <div class="message-header" >
    <input class="input message-header task-name-input"
           @blur="updateTask(task)" type="text" v-model="task.name"/>
    <span>
        <i :class="getDoneTodoCss(task)" @click="changeStatus(task)"></i>
        <i class="fa fa-remove" @click="deleteTask(task)"></i>
    </span>
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
      "fa fa-check" : "fa fa-undo";
    },
    updateTask(task){
        this.$emit("update", task);
    }
  }
}
</script>
