<template>
<div>
  <selectView @listViewSelected="listViewSelected"
              @calendarViewSelected="calendarViewSelected"/>
                  <!-- <containers/> -->
  <div id="layout" class="tile is-ancestor">
    <div class="tile is-parent" v-show="showListView">
      <listLayout class="tile is-child" :filterData="filterData"/>
    </div>
    <div class="tile is-parent" v-show="!showListView">
      <div class="tile is-child">
        <calendarLayout/>
      </div>
    </div>
  </div>
  <footerLayout @filterRequest="filterRequest" v-show="showListView"/>
</div>
</template>

<script>
import selectView from './components/view-selector/select-view'
import listLayout from './components/task-list/layout'
import calendarLayout from './components/calendar/calendar-layout'
import footerLayout from './components/footer/footer-layout'

export default {
  name: 'layout',
  data () {
    return {
      filterData: {},
      isListViewEnabled: true,
      isCalendarViewEnabled: false
    }
  },
  methods: {
    calendarViewSelected(){
      this.isListViewEnabled = false;
    },
    listViewSelected(){
      this.isListViewEnabled = true;
    },
    filterRequest(filter){
      this.filterData = filter;
    }
  },
  components: {
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
