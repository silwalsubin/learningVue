import uuid from 'uuid';
import httpClient from '../http-client'

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
      httpClient.post(getUrl("/add"), {data : task})
      .then(() => {
        context.commit('addTask', task);
        resolve();
      });
    });
  },
  deleteTask: (context, payload) => {
    return new Promise ((resolve, reject) => {
      httpClient.post(getUrl("/delete"), { data: payload })
      .then(() => {
        context.commit('deleteTask', payload);
        resolve();
      });
    });
  },
  changeStatus: (context, payload) => {
    httpClient.post(getUrl("/changeStatus"), { data: payload })
    .then(() => { context.commit('changeStatus', payload); });
  },
  getTasksData: (context) => {
    httpClient.post(getUrl("/getAll"), {data: context.state.user.id})
    .then(response => {
      context.commit('setTasks', response.data);
    });
  },
  changeOrder: (context, payload) => {
    httpClient.post(getUrl("/setAll"), {data: payload})
    .then(() => { context.commit('setTasks', payload); });
  },
  logUserIn: (context, payload) => {
    context.commit('logUserIn', payload);
  },
  logUserOut: (context) => {
    context.commit('logUserOut');
  },
  updateTask: (context, payload) => {
    httpClient.post(getUrl("/update"), { data: payload })
    .then (() => { context.commit('updateTask', payload); });
  }
}
