<template>
  <div :class="getBoxCss" @mouseenter="showControls()" @mouseleave="hideControls()">
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
        <strong>
          <input :class="getInputBoxCss"
                   :readonly = "getReadOnly"
                   @blur="onblur(task)" type="text"
                   @dblclick="enableEdit()" v-model="task.name"/>
        </strong>
        <span :class="getControlCss">
            <i :class="getDoneTodoCss(task)" @click="changeStatus(task)"></i>
            <i class="fa fa-remove fa-lg" @click="deleteTask(task)"></i>
        </span>
      </p>
      </div>
    </div>
  </article>

</div>
</template>

<script>

let inputBoxDisabled = "input task-name-input-disabled ";
let inputBoxEnabled = "input task-name-input-enabled";
let controlCssEnabled = "task-name-span show";
let controlCssDisabled = "task-name-span hide";


export default {
  name: "taskItem",
  data() {
    return {
      inputBoxCss: inputBoxDisabled,
      readOnly: true,
      controlCss: controlCssDisabled
    }
  },
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
    enableEdit(){
      this.inputBoxCss = inputBoxEnabled;
      this.readOnly = false;
    },
    getDoneTodoCss(task){
      return task.isComplete === false ?
      "fa fa-check fa-lg" : "fa fa-undo fa-lg";
    },
    hideControls(){
      this.controlCss = controlCssDisabled;
    },
    showControls(){
      this.controlCss = controlCssEnabled;
    },
    onblur(task){
      this.readOnly = true;
      this.inputBoxCss = inputBoxDisabled;
      this.$emit("update", task);
    }
  },
  computed : {
    getInputBoxCss() {
      return (this.task.isComplete === true)?
      this.inputBoxCss + " taskCompleted": this.inputBoxCss;
    },
    getReadOnly() {
      return this.readOnly;
    },
    getControlCss(){
      return this.controlCss;
    },
    getBoxCss(){
      return (this.task.isComplete === true)?
      "box task-name-box taskCompleted" : "box task-name-box";
    }
  }
}
</script>
