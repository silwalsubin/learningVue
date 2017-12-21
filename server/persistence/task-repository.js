import jsonDb from 'node-json-db';
let db = new jsonDb("./database/todos", true, false);

export default {
  getAll: (userID) => {
    let tasks = db.getData('/').tasks;
    return tasks.filter(x => x.userID === userID);
  },
  add: (task) => {
    let tasks = db.getData('/').tasks;
    tasks.splice(0, 0, task);
    db.delete('/tasks');
    db.push('/tasks', tasks, true);
  },
  changeStatus: (id) => {
    let tasks = db.getData('/').tasks;
    let index = tasks.findIndex(x => x.id === id);
    db.push(`/tasks[${index}]/isComplete`, !tasks[index].isComplete, true);
  },
  delete: (id) => {
    let tasks = db.getData('/').tasks;
    db.delete(`/tasks[${tasks.findIndex(x => x.id === id)}]`);
  },
  set: (task) => {
    let index = db.getData('/').tasks.findIndex(x => x.id === task.id);
    db.push(`/tasks[${index}]`, task);
  },
  setTasks: (tasks) => {
    db.delete('/tasks');
    db.push('/tasks', tasks, true);
  }
}
