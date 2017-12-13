<template>
  <div>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{getModalTitle}}</p>
        <button class="delete" aria-label="close" @click="closeModal()"></button>
      </header>
      <section class="modal-card-body">
        <entryLayout @taskCreated="closeModal()"/>
      </section>
    </div>
  </div>
</template>


<script>
import entryLayout from '../entry-fields/entry-layout'
export default {
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
      return `Add Task`
    }
  },
  components: {
    entryLayout
  }
}
</script>
