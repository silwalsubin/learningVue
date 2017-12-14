<template>
<div class="box entrybox">
  <div class="field">
    <p class="control">
      <input ref='entryInput' class="input task-entry-input" type="text"
       @keyup.enter="addTaskFromEnter(enteredTask, dueDate)"
       v-model="enteredTask"
       placeholder="Enter a task"
       autofocus="autofocus"
       tabindex="3">
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button ref="addButton" class="button is-success add-task-button"
              @click="addTask(enteredTask, dueDate)"
              :tabindex="4">
        Add
      </button>
    </p>
  </div>
</div>
</template>

<script>

import swal from 'sweetalert'
import flatPickr from 'vue-flatpickr-component';

export default {
  name: "entry",
  props: {
    dueDate: {
      type: String,
      default: ""
    }
  },
  methods: {
    addTask(name, dueDate){
      if (name.trim() === ""){
        swal("Error", "Name field cannot be empty", "error");
      }
      else {
        this.$emit("addTask", {name, dueDate});
        this.enteredTask = "";
      }
      this.$refs.entryInput.focus();
      this.$refs.entryInput.select();
    },
    addTaskFromEnter(enteredTask, dueDate){
      if (enteredTask.trim() !== "" ){
        this.addTask(enteredTask, dueDate);
      }
    },
    changeFocusToAddButton(){
      this.$refs.addButton.focus();
    }
  },
  data() {
    return {
      enteredTask: '',
    }
  },
  components: {
    flatPickr
  }
}
</script>

<style>
@import './assets/entry-field.scss';
</style>
