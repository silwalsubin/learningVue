import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';


vue.use(vuex);

export default new vuex.Store({
  state: {
    tasks: []
  },
  actions: {
    submitTasks: (context, payload) => {
      context.commit('setTasks', payload);
    },
    getTasksData: (context) => {
       var url = "http://localhost:8080/static/todos.json";
       axios.get(url).then(response => {
         context.commit('setTasks', response.data);
       });
    }
  },
  mutations: {
    setTasks: (state, payload) => {
      state.tasks.length = 0;
      state.tasks.push(...payload);
    },
    deleteTask: (state, payload) => {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    }
  },
  getters: {
    getTasks: (state) => {
      return state.tasks.slice();
    }
  }
});
