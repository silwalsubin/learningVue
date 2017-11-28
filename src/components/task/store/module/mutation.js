import axios from 'axios';

export default{
  addTask: (state, payload) => {
    var url = "http://localhost:3000/addTask";
    axios.post(url, payload)
    .then(() => {
      state.tasks.push(payload);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  deleteTask: (state, payload) => {
    var url = "http://localhost:3000/deleteTask";
    axios.post(url, payload)
    .then(() => {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  changeTaskStatus: (state, payload) => {
    var url = "http://localhost:3000/changeStatus";
    axios.post(url, payload)
    .then(() => {
      state.tasks[state.tasks.indexOf(payload)].isComplete = !payload.isComplete;
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
