import jsonDb from 'node-json-db';
let db = new jsonDb("./database/todos", true, false);


export default {
  getAll: () => {
    return db.getData('/').tasks;
  },
  add: (task) => {
    db.push("/tasks[]", task, true);
  },
  changeStatus: (task) => {
    let tasks = db.getData('/').tasks;
    let index = -1;
    for(var x in tasks){
      if (task.name === tasks[x].name && task.isComplete === tasks[x].isComplete){
        index = x;
      }
    }
    if (index !== -1){
      let indexedValue = "/tasks["+ index +"]/isComplete";
      db.push(indexedValue, !task.isComplete, true);
    }
  },
  delete: (task) => {
    let tasks = db.getData('/').tasks;
    let index = -1;
    for(var x in tasks){
      if (task.name === tasks[x].name && task.isComplete === tasks[x].isComplete){
        index = x;
      }
    }
    if (index !== -1){
      let indexedValue = "/tasks["+ index +"]";
      db.delete(indexedValue);
    }
  }
}
