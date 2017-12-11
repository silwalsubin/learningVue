<template>
<div>
  <entry @addTask="addTask"/>
  <div id="layout" class="tile is-ancestor">
    <div class="tile is-parent">
      <listLayout class="tile is-child box" :statusFilter="statusFilter"/>
    </div>
    <div class="tile is-6 is-vertical is-parent">
      <div class="tile is-child box calendar-box">
        <calendarLayout/>
      </div>
    </div>
  </div>
  <footerLayout @filterRequested="filterData"/>
</div>
</template>

<script>
import listLayout from './list-layout'
import notify from '../../notification'
import calendarLayout from '../calendar/calendar-layout'
import entry from './entry'
import footerLayout from '../footer/footer-layout'

export default {
  name: 'layout',
  data () {
    return {
      statusFilter: {}
    }
  },
  methods: {
    addTask(task){
      this.$store.dispatch('addTask', task).then(() => {
        let message = `Task ${name} added successfully.`
        notify(message);
      });
    },
    filterData(filter){
      this.statusFilter = filter;
    }
  },
  computed: {
  },
  components: {
    calendarLayout,
    listLayout,
    entry,
    footerLayout
  }
}
</script>

<style lang="scss">
@import './assets/tasks.scss';
</style>
