<template>
<div>
  <entry @addTask="addTask"/>
  <selectView @listViewSelected="listViewSelected"
              @calendarViewSelected="calendarViewSelected"/>
  <div id="layout" class="tile is-ancestor">
    <div class="tile is-parent" v-show="showListView">
      <listLayout class="tile is-child" :statusFilter="statusFilter"/>
    </div>
    <div class="tile is-parent" v-show="!showListView">
      <div class="tile is-child">
        <calendarLayout/>
      </div>
    </div>
  </div>
  <footerLayout @filterRequest="filterData" v-show="showListView"/>
</div>
</template>

<script>
import entry from './components/task/entry'
import selectView from './components/view-selector/select-view'
import listLayout from './components/task/list-layout'
import calendarLayout from './components/calendar/calendar-layout'
import footerLayout from './components/footer/footer-layout'
import notify from './notification'

export default {
  name: 'layout',
  data () {
    return {
      statusFilter: {},
      isListViewEnabled: true,
      isCalendarViewEnabled: false
    }
  },
  methods: {
    addTask(task){
      this.$store.dispatch('addTask', task).then(() => {
        let message = `Task ${name} added successfully.`
        notify(message);
      });
    },
    calendarViewSelected(){
      this.isListViewEnabled = false;
    },
    listViewSelected(){
      this.isListViewEnabled = true;
    },
    filterData(filter){
      this.statusFilter = filter;
    }
  },
  components: {
    entry,
    selectView,
    listLayout,
    calendarLayout,
    footerLayout
  },
  computed : {
    showListView(){
      return this.isListViewEnabled;
    }
  }
}
</script>
