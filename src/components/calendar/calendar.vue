<template>
  <div>
     <vueFullcalendar :events="getEvents" @dayClick="daySelected"
                       @eventClick="eventSelected" locale="en"/>
     <listModal :class="getModalCss" :selectedDate="getSelectedDate"
                @modalClosed="closeModal()"/>
  </div>
</template>

<script>
  import vueFullcalendar from 'vue-fullcalendar';
  import listModal from './modals/task-list-modal'
  import moment from 'moment';

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
      listModal
    },
    methods: {
      changeStatus(id){
        this.$emit('changeStatus', id);
      },
      closeModal(){
        this.modalCss = "modal";
      },
      deleteTask(id){
        this.$emit('deleteTask', id);
      },
      daySelected(date){
        this.modalCss = "modal is-active";
        this.selectedDate = moment(date).format('YYYY-MM-DD');
        this.$nextTick(() => {
          let inputBox = this.$el.querySelector('.task-entry-input');
          inputBox.focus();
        });
      },
      eventSelected(event){
        this.modalCss = "modal is-active";
        let eventDate = new Date(event.start);
        this.selectedDate = moment(eventDate).format('YYYY-MM-DD');
        this.$nextTick(() => {
          let inputBox = this.$el.querySelector('.task-entry-input');
          inputBox.focus();
        });
      },
      updateTask(task){
        this.$emit('updateTask', task);
      }
    },
    computed : {
      getEvents() {
        let allDueDates = ([...new Set(this.tasks.map(x => x.dueDate))]);
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
      },
      getSelectedDate(){
        return this.selectedDate;
      }
    }
  }
  </script>

  <style lang="scss">
  @import './assets/calendar.scss';
  </style>
