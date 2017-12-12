<template>
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
</template>

<script>
export default {
  data() {
    return {
      isListViewEnabled: true,
      isCalendarViewEnabled: false
    }
  },
  methods: {
    listViewSelected(){
      this.isListViewEnabled = true;
      this.isCalendarViewEnabled = false;
      this.$emit('listViewSelected');
    },
    calendarViewSelected(){
      this.isListViewEnabled = false;
      this.isCalendarViewEnabled = true;
      this.$emit('calendarViewSelected');
    }
  },
  computed: {
    getListViewCss() {
      return this.isListViewEnabled === true ? "is-active" : "";
    },
    getCalendarViewCss(){
      return this.isCalendarViewEnabled === true ? "is-active" : "";
    }
  }
}
</script>
