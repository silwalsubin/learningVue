
export default{
  addTask: (state, task) => {
    state.tasks.push(task);
  },
  changeTaskStatus: (state, id) => {
    let task = state.tasks.find(x => x.id === id);
    task.isComplete = !task.isComplete;
  },
  deleteTask: (state, id) => {
    state.tasks.splice(state.tasks.findIndex(x => x.id === id), 1);
  },
  setTasks: (state, tasks) => {
    state.tasks.length = 0;
    state.tasks.push(...tasks);
  },
  updateTask: (state, task) => {
    let searchedTask = state.tasks.find(x => x.id === task.id);
    searchedTask.name = task.name;
  }
}
