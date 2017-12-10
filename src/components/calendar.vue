<template>
  <vueFullcalendar :events="getEvents" locale="en"/>
</template>

<script>
  //import 'vue-event-calendar/dist/style.css'
  import vueFullcalendar from 'vue-fullcalendar'
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
        let allEvents = [];
        for (let x in this.tasks){
          allEvents.push({
            title: this.tasks[x].name,
            start: moment(this.tasks[x].dueDate).format('MM/DD/YYYY'),
            end: moment(this.tasks[x].dueDate).format('MM/DD/YYYY')
          })
        }
        return allEvents;
      }
    }
  }
  </script>
