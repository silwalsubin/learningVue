import axios from 'axios';
import uuid from 'uuid';

const baseUrl = "http://localhost:3000/task";

function getUrl(methodName) {
    return baseUrl + methodName;
}

export default {
  addTask: (context, payload) => {
    let task = {
      dueDate: payload.dueDate,
      id : uuid(),
      name : payload.name,
      isComplete : false
    }
    axios.post(getUrl("/add"), { data: task })
    .then(() => { context.commit('addTask', task); })
    .catch((error) => { console.log(error); });
  },
  deleteTask: (context, payload) => {
    axios.post(getUrl("/delete"), { data: payload })
    .then(() => { context.commit('deleteTask', payload); })
    .catch((error) => { console.log(error); });
  },
  changeStatus: (context, payload) => {
    axios.post(getUrl("/changeStatus"), { data: payload })
    .then(() => { context.commit('changeStatus', payload); })
    .catch((error) => { console.log(error); });
  },
  getTasksData: (context) => {
    axios.get(getUrl("/getAll"))
    .then(response => { context.commit('setTasks', response.data); })
    .catch((error) => { console.log(error); });
  },
  changeOrder: (context, payload) => {
    axios.post(getUrl("/setAll"), {data: payload})
    .then(() => { context.commit('setTasks', payload); })
    .catch((error) => { console.log(error); });
  },
  updateTask: (context, payload) => {
    axios.post(getUrl("/update"), { data: payload })
    .then (() => { context.commit('updateTask', payload); })
    .catch(() => { console.log(error); });
  }
}
