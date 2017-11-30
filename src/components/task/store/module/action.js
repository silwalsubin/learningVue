import axios from 'axios';
import uuid from 'uuid';

const baseUrl = "http://localhost:3000/task";

function getUrl(methodName) {
    return baseUrl + methodName;
}

export default {
  addTask: (context, payload) => {
    let task = {
      id : uuid(),
      name : payload,
      isComplete : false
    }
    axios.post(getUrl("/add"), {
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
    axios.post(getUrl("/delete"), {
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
    axios.post(getUrl("/changeStatus"), {
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
     axios.get(getUrl("/getAll"))
     .then(response => {
       context.commit('setTasks', response.data);
     })
     .catch((error) => {
     console.log(error);
   });
  }
}
