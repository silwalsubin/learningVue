import axios from 'axios';

export default{
  addTask: (state, payload) => {
    //state.tasks.push(payload);
    var url = "http://localhost:3000/task";
    console.log(payload);
    axios.post(url, payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  deleteTask: (state, payload) => {
    state.tasks.splice(state.tasks.indexOf(payload), 1);
  },
  changeTaskStatus: (state, payload) => {
    state.tasks[state.tasks.indexOf(payload)].isComplete = !payload.isComplete;
  },
  setTasks: (state, payload) => {
    state.tasks.length = 0;
    state.tasks.push(...payload);
  }
}
