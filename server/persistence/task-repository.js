import jsonDb from 'node-json-db';
let db = new jsonDb("./database/todos", true, false);

export default {
  getAll: () => {
    return db.getData('/').tasks;
  },
  add: (task) => {
    db.push("/tasks[]", task, true);
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
  swap: (fromIndex, toIndex) => {
    let fromTask = db.getData(`/tasks[${fromIndex}]`);
    let toTask = db.getData(`/tasks[${toIndex}]`);
    db.push(`/tasks[${fromIndex}]`, toTask);
    db.push(`/tasks[${toIndex}]`, fromTask);
  }
}
