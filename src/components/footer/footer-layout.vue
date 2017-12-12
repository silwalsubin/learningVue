<template>
  <footerFilter id="footer-layout" :isCompletedChecked="isCompletedChecked"
               :isToDoChecked="isToDoChecked"
               :status="tasksStatus"
               @showCompleted="showCompletedToggle"
               @showToDo="showToDoToggle"/>
</template>

<script>
import footerFilter from './footer-filter'

export default {
  name: 'footer-layout',
  data () {
    return {
      isCompletedChecked: false,
      isToDoChecked: false
    }
  },
  methods: {
    showCompletedToggle(){
      this.isToDoChecked = false;
      this.isCompletedChecked = !this.isCompletedChecked;
      this.$emit("filterRequest", {
        isToDoChecked : this.isToDoChecked,
        isCompletedChecked : this.isCompletedChecked
      });
    },
    showToDoToggle(){
      this.isCompletedChecked = false;
      this.isToDoChecked = !this.isToDoChecked;
      this.$emit("filterRequest", {
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
    footerFilter
  }
}
</script>
