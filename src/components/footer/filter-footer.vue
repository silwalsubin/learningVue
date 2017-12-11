<template>
    <footer id="filter-footer" class="footer">
      <div class="buttons has-addons">
        <span :class="getCompletedButtonCss()" @click="showCompleted">Completed ({{status.complete}})</span>
        <span :class="getToDoButtonCss()" @click="showToDo">ToDo ({{status.toDo}})</span>
      </div>
    </footer>
</template>

<script>
let buttonCss = "button is-light footer-button";
let buttonSelectedCss = "button is-light footer-button is-success";
export default {
  name: "filter-footer",
  props: {
    isCompletedChecked : {
      type: Boolean,
      default: false
    },
    isToDoChecked : {
      type: Boolean,
      default: false
    },
    status: {
      type: Object,
      default() {
        return {
          complete: 0,
          toDo: 0,
          total: 0
        }
      }
    }
  },
  data () {
    return {
      enteredTask: ''
    }
  },
  methods: {
    getCompletedButtonCss(){
      return this.isCompletedChecked === true ?
        buttonSelectedCss : buttonCss;
    },
    getToDoButtonCss(){
      return this.isToDoChecked === true ?
        buttonSelectedCss : buttonCss;
    },
    getAllTasksButtonCss(){

    },
    getButtonCss(){
        return buttonCss;
    },
    showCompleted(){
      this.$emit("showCompleted");
    },
    showToDo(){
      this.$emit("showToDo");
    }
  }
}
</script>
