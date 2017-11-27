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
     var url = "http://localhost:3000/tasks";
     axios.get(url).then(response => {
       context.commit('setTasks', response.data);
     }).catch(() => {
     });
  }
}
