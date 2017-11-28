import axios from 'axios';
import uuid from 'uuid';

export default{
  addTask: (state, payload) => {
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
      state.tasks.push(task);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  changeTaskStatus: (state, payload) => {
    var url = "http://localhost:3000/task/changeStatus";
    axios.post(url, {
      data: payload
    })
    .then(() => {
      let index = state.tasks.findIndex(x => x.id === payload);
      state.tasks[index].isComplete = !state.tasks[index].isComplete;
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  deleteTask: (state, payload) => {
    var url = "http://localhost:3000/task/delete";
    axios.post(url, {
      data: payload
    })
    .then(() => {
      state.tasks.splice(state.tasks.findIndex(x => x.id === payload), 1);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  setTasks: (state, payload) => {
    state.tasks.length = 0;
    state.tasks.push(...payload);
  }
}
