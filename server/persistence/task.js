let jsonDb = require ('node-json-db');
let db = new jsonDb("./database/todos", true, false);


module.exports = {
  getTasks: function(){
    try {
      return db.getData('/').tasks;
    }
    catch (error){
      console.error(error);
    }
  },
  addTask: function(task){
    try {
      db.push("/tasks[]", task, true);
    }
    catch (error){
      console.error(error);
    }
  }
}
