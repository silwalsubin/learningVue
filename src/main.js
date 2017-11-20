// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<App @addTask="addTask"
                  @deleteTask="deleteTask"
                  @taskCompletionStatus = "taskCompletionStatus">
             </App>`,
  components: { App },
  store,
  methods: {
    addTask(task){
      this.$store.dispatch('addTask', task);
    },
    deleteTask(task){
      this.$store.dispatch('deleteTask', task);
    },
    taskCompletionStatus(task){
      this.$store.dispatch('changeTaskStatus', task);
    }
  }
})
store.dispatch('getTasksData');
