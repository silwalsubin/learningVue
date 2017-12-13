<template>
  <div>
    <section class = "hero">
      <div class="hero-head">
      <header class="navbar is-fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h1 class="heading" v-bind:title = "msg">{{ msg }}</h1>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <!-- <a class="navbar-item is-active">
                Home
              </a>
              <a class="navbar-item">
                Examples
              </a>
              <a class="navbar-item">
                <i class="fa fa-github"></i>
                <p>List View</p>
              </a> -->
              <span class="navbar-item">
                <a class="button is-success" @click="openModal()">
                  <span class="icon">
                    <i class="fa fa-plus"></i>
                  </span>
                  <span>New Task</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  </section>
  <taskEntryModal :class="getModalCss" @modalClosed="closeModal()"/>
</div>
</template>

<script>
import taskEntryModal from './components/modals/task-entry-modal'
export default {
  name: 'app-header',
  data () {
    return {
      msg: "To-Do App",
      modalCss : "modal"
    }
  },
  methods: {
    closeModal(){
      this.modalCss = "modal";
    },
    openModal(){
      this.modalCss = "modal is-active";
    }
  },
  components : {
    taskEntryModal
  },
  computed: {
    getModalCss() {
      return this.modalCss;
    }
  }
}
</script>
