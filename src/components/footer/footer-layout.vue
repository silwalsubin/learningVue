<template>
  <filterFooter id="footer-layout" :isCompletedChecked="isCompletedChecked"
               :isToDoChecked="isToDoChecked"
               :status="tasksStatus"
               @showCompleted="showCompletedToggle"
               @showToDo="showToDoToggle"/>
</template>

<script>
import filterFooter from './filter-footer'

export default {
  name: 'footer-layout',
  data () {
    return {
      isCompletedChecked: false,
      isToDoChecked: false,
      isAllTasksChecked: true
    }
  },
  methods: {
    showCompletedToggle(){
      this.isToDoChecked = false;
      this.isCompletedChecked = !this.isCompletedChecked;
      this.$emit("filterRequested", {
        isToDoChecked : this.isToDoChecked,
        isCompletedChecked : this.isCompletedChecked
      });
    },
    showToDoToggle(){
      this.isCompletedChecked = false;
      this.isToDoChecked = !this.isToDoChecked;
      this.$emit("filterRequested", {
        isToDoChecked : this.isToDoChecked,
        isCompletedChecked : this.isCompletedChecked
      });
    }
  },
  computed: {
    tasksStatus(){
      return this.$store.getters.getTasksStatusReport;
    }
  },
  components: {
    filterFooter
  }
}
</script>
