export default{
  getTasks: (state) => {
    return state.tasks.slice();
  },
  getTasksStatusReport: (state) => {
    let completedTasks = state.tasks.filter(x => x.isComplete ).length;
    let totalTasks = state.tasks.length;
    return {
      complete: completedTasks,
      toDo: totalTasks - completedTasks,
      total: totalTasks
    };
  },
  getSignedinStatus: (state) => {
    return state.isSignedIn;
  },
  getUser: (state) => {
    return state.user;
  }
}
