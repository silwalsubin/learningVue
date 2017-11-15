import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';


vue.use(vuex);

export default new vuex.Store({
  state: {
    tasks: []
  },
  actions: {
    addTask: (context, payload) => {
      context.commit('createTask', payload);
    },
    removeTask: (context, payload) => {
      context.commit('deleteTask', payload);
    },
    getTasksData: (context) => {
       var url = "http://localhost:8080/static/todos.json";
       axios.get(url).then(response => {
         for (var value of response.data){
           context.commit('createTask', value);
         }
       });
    }
  },
  mutations: {
    createTask: (state, payload) => {
      state.tasks.push(payload);
    },
    deleteTask: (state, payload) => {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    }
  },
  getters: {
    getTasks: (state) => {
      return state.tasks;
    }
  }
});
