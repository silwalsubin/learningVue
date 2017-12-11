<template>
  <vueFullcalendar :events="getEvents" @eventClick="eventSelected" locale="en"/>
</template>

<script>

  import vueFullcalendar from 'vue-fullcalendar'
  import swal from 'sweetalert'
  import moment from 'moment'
  let today = new Date()

  export default {
    props: {
      tasks: {
        type: Array,
        default: []
      }
    },
    components: {
      vueFullcalendar
    },
    computed : {
      getEvents() {
        let allDueDates = [];
        allDueDates = ([...new Set(this.tasks.map(x => x.dueDate))]);
        let allEvents = [];
        for (let x in allDueDates){
          allEvents.push({
            start: moment(allDueDates[x]).format('MM/DD/YYYY'),
            title: this.tasks.filter((y) => {
              return y.dueDate === allDueDates[x]
            }).length
          });
        }
        return allEvents;
      }
    },
    methods: {
      eventSelected(event){
        let selectedTasks = this.tasks.filter
                            (x => moment(x.dueDate).format('MM/DD/YYYY') === event.start);
        let message = "";
        for (let x in selectedTasks){
          message = message + selectedTasks[x].name + ", "
        }
        swal ({
          title: `Tasks Due ${event.start}`,
          text: message.slice(0, -2)
        })
        console.log(message);
      }
    }
  }
  </script>

  <style lang="scss">
@import './assets/calendar.scss';
  </style>
