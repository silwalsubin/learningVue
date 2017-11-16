import axios from 'axios';

export default {
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
}
