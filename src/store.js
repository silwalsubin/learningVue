import vue from 'vue';
import vuex from 'vuex';

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
    }
  },
  mutations: {
    createTask: (state, payload) => {
      //state.tasks.length = 0;
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
