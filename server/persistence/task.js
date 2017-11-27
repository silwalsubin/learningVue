let jsonDb = require ('node-json-db');
let db = new jsonDb("./database/todos", true, false);


module.exports = {
  getTasks: function(){
    try {
          return db.getData('/');
    }
    catch (error){
      console.error(error);
    }
  }
}
