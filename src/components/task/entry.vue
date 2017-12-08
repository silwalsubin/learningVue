<template>
<div class ="columns is-gapless">
    <div class="column is-4"></div>
    <div class="column is-3 columns is-gapless">
          <div class="column is-6">
            <input class="input" type="text" v-model="enteredTask"
                   placeholder="Enter a task"/>
          </div>
          <div class="column is-6">
            <flat-pickr
                v-model = "dueDate"
                :required="true"
                class="input"
                placeholder="Due date"
                name="date">
              </flat-pickr>
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

import flatPickr from 'vue-flatpickr-component';

export default {
  name: "entry",
  methods: {
    addTask(name, dueDate){
      if (name !== "" && dueDate !== ""){
        this.$emit("addTask", {name, dueDate});
        this.enteredTask = "";
        this.dueDate = "";
      }
      else {
        console.log("implement validation later :)")
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
