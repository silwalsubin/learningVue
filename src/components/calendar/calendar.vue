<template>
  <div>
     <vueFullcalendar :events="getEvents" @eventClick="eventSelected" locale="en"/>
     <div :class="getModalCss">
       <div class="modal-background"></div>
       <div class="modal-card">
         <header class="modal-card-head">
           <p class="modal-card-title">{{modalTitle}}</p>
           <button class="delete" aria-label="close" @click="closeModal()"></button>
         </header>
         <section class="modal-card-body">
           <list :tasks="getFilteredTasks"/>
         </section>
       </div>
     </div>
  </div>
</template>

<script>
  import list from '../task/list'
  import vueFullcalendar from 'vue-fullcalendar';
  import moment from 'moment';
  let today = new Date()

  export default {
    data(){
      return {
        modalCss : "modal",
        modalTitle: "",
        selectedDate : ""
      }
    },
    props: {
      tasks: {
        type: Array,
        default: []
      }
    },
    components: {
      vueFullcalendar,
      list
    },
    computed : {
      getEvents() {
        let allDueDates = [];
        allDueDates = ([...new Set(this.tasks.map(x => x.dueDate))]);
        let allEvents = [];
        for (let x in allDueDates){
          allEvents.push({
            start: moment(allDueDates[x]).format('MM/DD/YYYY'),
            title: this.tasks.filter( y => y.dueDate === allDueDates[x]).length
          });
        }
        return allEvents;
      },
      getModalCss() {
        return this.modalCss;
      },
      getFilteredTasks() {
        return this.tasks.filter
                    (x => moment(x.dueDate).format('MM/DD/YYYY') === this.selectedDate );
      }
    },
    methods: {
      closeModal(){
        this.modalCss = "modal";
      },
      eventSelected(event){
        this.modalCss = "modal is-active";
        this.modalTitle = `Task(s) due on ${event.start}`;
        this.selectedDate = event.start;
      }
    }
  }
  </script>

  <style lang="scss">
@import './assets/calendar.scss';
  </style>
