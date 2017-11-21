export default{
  addTask: (state, payload) => {
    state.tasks.push(payload);
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
