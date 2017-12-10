<template>
<div class ="columns is-gapless">
    <div class="column is-4"></div>
    <div class="column is-3 columns is-gapless">
          <div class="column is-6">
            <input class="input" type="text" v-model="enteredTask"
                   placeholder="Enter a task"/>
          </div>
          <div class="column is-6">
            <div class="control has-icons-left">
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
            </div>
          </div>
    </div>
    <div class="column is-1">
        <button class = "button is-success"
                @click="addTask(enteredTask, dueDate)">Add</button>
    </div>
    <div class="column is-4"></div>
</div>
</template>


<script>

import swal from 'sweetalert'
import flatPickr from 'vue-flatpickr-component';

export default {
  name: "entry",
  methods: {
    addTask(name, dueDate){
      if (name === ""){
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
  computed: {
    enteredValue: {
      get() {
        return this.enteredTask
      },
      set(value){

      }
    }
  },
  components: {
    flatPickr
  }
}
</script>
