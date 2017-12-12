<template>
<div>
  <entry @addTask="addTask"/>
  <div class="tabs is-toggle is-centered">
    <ul>
      <li :class="getListViewCss">
        <a @click="listViewSelected()">
          <span class="icon is-small"><i class="fa fa-list"></i></span>
          <span>List View</span>
        </a>
      </li>
      <li :class="getCalendarViewCss">
        <a @click="calendarViewSelected()">
          <span class="icon is-small"><i class="fa fa-calendar"></i></span>
          <span>Calendar View</span>
        </a>
      </li>
    </ul>
  </div>
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
import calendarLayout from './components/calendar/calendar-layout'
import entry from './components/task/entry'
import footerLayout from './components/footer/footer-layout'
import listLayout from './components/task/list-layout'
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
      this.isCalendarViewEnabled = true;
      this.isListViewEnabled = !this.isCalendarViewEnabled;
    },
    filterData(filter){
      this.statusFilter = filter;
    },
    listViewSelected(){
      this.isListViewEnabled = true;
      this.isCalendarViewEnabled = !this.isListViewEnabled;
    }
  },
  components: {
    calendarLayout,
    entry,
    footerLayout,
    listLayout
  },
  computed : {
    getListViewCss() {
      return this.isListViewEnabled === true ? "is-active" : "";
    },
    getCalendarViewCss(){
      return this.isCalendarViewEnabled === true ? "is-active" : "";
    },
    showListView(){
      return this.isListViewEnabled;
    }
  }
}
</script>
