import axios from 'axios';
import uuid from 'uuid';
import notify from '../notification'

const baseUrl = "http://localhost:3000/task";

function getUrl(methodName) {
    return baseUrl + methodName;
}

export default {
  addTask: (context, payload) => {
    let task = {
      userID: context.state.user.id,
      dueDate: payload.dueDate,
      id : uuid(),
      name : payload.name,
      isComplete : false
    }
    return new Promise ((resolve, reject) => {
      axios.post(getUrl("/add"), { data: task })
      .then(() => {
        context.commit('addTask', task);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  deleteTask: (context, payload) => {
    return new Promise ((resolve, reject) => {
      axios.post(getUrl("/delete"), { data: payload })
      .then(() => {
        context.commit('deleteTask', payload);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  changeStatus: (context, payload) => {
    axios.post(getUrl("/changeStatus"), { data: payload })
    .then(() => { context.commit('changeStatus', payload); })
    .catch((error) => { console.log(error); });
  },
  getTasksData: (context) => {
    axios.post(getUrl("/getAll"), {data: context.state.user.id})
    .then(response => {
      context.commit('setTasks', response.data);
    })
    .catch((error) => { console.log(error); });
  },
  changeOrder: (context, payload) => {
    axios.post(getUrl("/setAll"), {data: payload})
    .then(() => { context.commit('setTasks', payload); })
    .catch((error) => { console.log(error); });
  },
  logUserIn: (context, payload) => {
    context.commit('logUserIn', payload);
  },
  logUserOut: (context) => {
    context.commit('logUserOut');
  },
  updateTask: (context, payload) => {
    axios.post(getUrl("/update"), { data: payload })
    .then (() => { context.commit('updateTask', payload); })
    .catch(() => { console.log(error); });
  }
}
