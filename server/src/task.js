const express = require('express');
const cors = require('cors');
const task = express();
task.use(cors());

const index = require('./index');

let tasks = [
              {"name": "task 1", "isComplete": false },
              {"name": "task 2", "isComplete": false },
              {"name": "task 3", "isComplete": false },
              {"name": "task 4", "isComplete": false },
              {"name": "task 5", "isComplete": true },
              {"name": "task 6", "isComplete": true }
            ];

task.get('/tasks', (req, res) => {
  res.send(tasks);
});

task.listen(index.port, () => {
  console.log('Example app listening on port ' + index.port);
});
