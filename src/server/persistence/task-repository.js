let jsonDb = require ('node-json-db');
let db = new jsonDb("./database/todos", true, false);


module.exports = {
  getAll: function(){
    try {
      return db.getData('/').tasks;
    }
    catch (error){
      console.error(error);
    }
  },
  add: function(task){
    try {
      db.push("/tasks[]", task, true);
    }
    catch (error){
      console.error(error);
    }
  },
  changeStatus: function(task){
    let tasks = db.getData('/').tasks;
    let index = -1;
    for(x in tasks){
      if (task.name === tasks[x].name && task.isComplete === tasks[x].isComplete){
        index = x;
      }
    }
    try{
      if (index !== -1){
        let indexedValue = "/tasks["+ index +"]/isComplete";
        db.push(indexedValue, !task.isComplete, true);
      }
    }
    catch (error){
      console.error(error);
    }
  },
  delete: function(task){
    let tasks = db.getData('/').tasks;
    let index = -1;
    for(x in tasks){
      if (task.name === tasks[x].name && task.isComplete === tasks[x].isComplete){
        index = x;
      }
    }
    try{
      if (index !== -1){
        let indexedValue = "/tasks["+ index +"]";
        db.delete(indexedValue);
      }
    }
    catch (error){
      console.error(error);
    }
  }
}
