import axios from 'axios';
import uuid from 'uuid';

export default {
  addTask: (context, payload) => {
    var url = "http://localhost:3000/task/add";
    let task = {
      id : uuid(),
      name : payload,
      isComplete : false
    }
    axios.post(url, {
      data: task
    })
    .then(() => {
      context.commit('addTask', task);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  deleteTask: (context, payload) => {
    var url = "http://localhost:3000/task/delete";
    axios.post(url, {
      data: payload
    })
    .then(() => {
      context.commit('deleteTask', payload);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  changeTaskStatus: (context, payload) => {
    var url = "http://localhost:3000/task/changeStatus";
    axios.post(url, {
      data: payload
    })
    .then(() => {
      context.commit('changeTaskStatus', payload);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  getTasksData: (context) => {
     var url = "http://localhost:3000/task/getAll";
     axios.get(url)
     .then(response => {
       context.commit('setTasks', response.data);
     })
     .catch((error) => {
     console.log(error);
   });
  }
}
