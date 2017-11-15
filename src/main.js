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
      this.tasks.push(task);
      setTask(tasks);
    },
    deleteTask(task){
      this.tasks.splice(this.tasks.indexOf(task), 1);
      setTask(tasks);
    },
    setTask(tasks){
      this.$store.dispatch('submitTasks', tasks);
    }
  },
  data(){
    return {
      tasks: this.$store.getters.getTasks
    }
  }
})
store.dispatch('getTasksData');
