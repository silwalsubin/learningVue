<template>
<div class="box entrybox">
  <div class="field">
    <p class="control">
      <input class="input" type="text"
       @keyup.enter="addTask(enteredTask, dueDate)"
       v-model="enteredTask"
       placeholder="Enter a task">
    </p>
  </div>
  <div class="field" v-show="showDueDateInput">
    <p class="control has-icons-left">
      <flat-pickr
          v-model = "dueDate"
          :required="true"
          class="input"
          placeholder="Due date"
          name="date"/>
      <span class="icon is-small is-left">
        <i class="fa fa-calendar"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button class="button is-success" @click="addTask(enteredTask, dueDate)">
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
    addTask(name, dueDate){
      if (this.showDueDateInput === false){
        dueDate = this.externalDueDate;
      }
      if (name.trim() === ""){
        swal("Error", "Name field cannot be empty", "error");
      }
      else if (dueDate === ""){
        swal("Error", "Due date field cannot be empty", "error");
      }
      else {
        this.$emit("addTask", {name, dueDate});
        this.enteredTask = "";
        this.dueDate = "";
      }
    }
  },
  data() {
    return {
      enteredTask: '',
      dueDate: ''
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
