<template>
<div class="box entrybox">
  <div class="field">
    <p class="control">
      <input ref='entryInput' class="input task-entry-input" type="text"
       v-model="enteredTask"
       placeholder="Enter a task"
       autofocus="autofocus"
       tabindex="1">
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <flat-pickr
          v-model="dueDate"
          :required="true"
          class="input due-date-picker"
          placeholder="Due date"
          name="date"
          :tabindex="2"
          @on-change="changeFocusToAddButton()"/>
      <span class="icon is-small is-left">
        <i class="fa fa-calendar"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button ref="addButton" class="button is-success add-task-button"
              @click="addTask(enteredTask, dueDate)"
              :tabindex="3">
        Add
      </button>
    </p>
  </div>
</div>
</template>

<script>

import swal from 'sweetalert'
import flatPickr from 'vue-flatpickr-component';
import moment from 'moment'

export default {
  name: "entry",
  methods: {
    addTask(name, dueDate){
      if (name.trim() === ""){
        swal("Error", "Name field cannot be empty", "error");
      }
      else if (dueDate === ""){
        swal("Error", "Due date field cannot be empty", "error");
      }
      else {
        this.$emit("addTask", {name, dueDate});
        this.enteredTask = "";
        this.dueDate = this.getDueDate();
      }
      this.$nextTick(() => {
         this.$refs.entryInput.focus();
         this.$refs.entryInput.select();
      });
    },
    changeFocusToAddButton(){
      this.$refs.addButton.focus();
    },
    getDueDate(){
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow ;
    }
  },
  data() {
    return {
      enteredTask: '',
      dueDate : this.getDueDate()
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
