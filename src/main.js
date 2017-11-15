// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<App :tasks="tasks"
                  @addTask="addTask"
                  @deleteTask="deleteTask">
             </App>`,
  components: { App },
  store,
  methods: {
    addTask(task){
      this.$store.dispatch('addTask',task);
    },
    deleteTask(task){
      this.$store.dispatch('removeTask', task);
    }
  },
  data(){
    return {
      tasks: this.$store.getters.getTasks
    }
  }
})
store.dispatch('getTasksData');
