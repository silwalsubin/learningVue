<template>
    <footer id="tasks-footer" class="footer">
      <div class="buttons has-addons">
        <span :class="getCompletedButtonCss()" @click="showCompleted">Completed</span>
        <span :class="getToDoButtonCss()" @click="showToDo">ToDo</span>
        <span :class="getButtonCss()">Sort</span>
        <span :class="getButtonCss()">Sort Descending</span>
      </div>
    </footer>
</template>

<script>

let buttonCss = "button is-light footer-button";
let buttonSelectedCss = "button is-light footer-button is-success";
export default {
  name: "tasks-footer",
  props: {
    isCompletedChecked : {
      type: Boolean,
      default: false
    },
    isToDoChecked : {
      type: Boolean,
      default: false
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
