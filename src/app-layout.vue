<template>
<div>

  <loginLayout v-if="!isUserSignedin" />

  <div v-if="isUserSignedin">
    <userProfile/>
    <selectView @listViewSelected="listViewSelected"
                @calendarViewSelected="calendarViewSelected"/>
    <entryLayout/>
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
</div>
</template>



<script>
import loginLayout from './components/login/login-layout'
import entryLayout from './components/entry-fields/entry-layout'
import selectView from './components/view-selector/select-view'
import listLayout from './components/task-list/layout'
import calendarLayout from './components/calendar/calendar-layout'
import footerLayout from './components/footer/footer-layout'
import userProfile from './components/user-profile/profile-layout'

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
    signInStatus(value){
      this.isSignedIn = value;
    },
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
    userProfile,
    loginLayout,
    selectView,
    entryLayout,
    listLayout,
    calendarLayout,
    footerLayout
  },
  computed : {
    isUserSignedin(){
      return this.$store.getters.getSignedinStatus;
    },
    showListView(){
      return this.isListViewEnabled;
    }
  }
}
</script>
