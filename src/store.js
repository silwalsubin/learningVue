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
      context.commit('addTask', payload);
    },
    deleteTask: (context, payload) => {
      context.commit('deleteTask', payload);
    },
    changeTaskStatus: (context, payload) => {
      context.commit('changeTaskStatus', payload);
    },
    getTasksData: (context) => {
       var url = "http://localhost:8080/static/todos.json";
       axios.get(url).then(response => {
         context.commit('setTasks', response.data);
       });
    }
  },
  mutations: {
    addTask: (state, payload) => {
      state.tasks.push(payload);
    },
    deleteTask: (state, payload) => {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    },
    changeTaskStatus: (state, payload) => {
      state.tasks[state.tasks.indexOf(payload)].isComplete = !payload.isComplete;
    },
    setTasks: (state, payload) => {
      state.tasks.length = 0;
      state.tasks.push(...payload);
    }
  },
  getters: {
    getTasks: (state) => {
      return state.tasks.slice();
    }
  }
});
