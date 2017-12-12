<template>
<div class="box">
  <div class="field">
    <p class="control">
      <input class="input" type="text" v-model="enteredTask"
       placeholder="Enter a task">
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <flat-pickr
          v-model = "dueDate"
          :required="true"
          class="input"
          placeholder="Due date"
          name="date">
        </flat-pickr>
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
