<template>
  <div>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{getModalTitle}}</p>
        <button class="delete" aria-label="close" @click="closeModal()"></button>
      </header>
      <section class="modal-card-body">
        <entryLayout :showDueDateInput=false :externalDueDate="selectedDate"/>
        <!-- <list :tasks="getFilteredTasks"
              @deleteTask="deleteTask"
              @changeStatus="changeStatus"
              @updateTask="updateTask"/> -->

      </section>
    </div>
  </div>
</template>


<script>
import entryLayout from '../entryFields/entry-layout'
export default {
  props: {
    selectedDate: {
      type: String
    }
  },
  data() {
    return {
      modalCss : "modal"
    }
  },
  methods: {
    closeModal(){
      this.$emit("modalClosed");
    }
  },
  computed: {
    getModalCss() {
      return (this.isActive === true) ? "modal is-active": "modal";
    },
    getModalTitle(){
      return `Task(s) due on ${this.selectedDate}`
    }
  },
  components: {
    entryLayout
  }
}
</script>
