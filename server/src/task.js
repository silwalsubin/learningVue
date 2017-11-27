const express = require('express');
const cors = require('cors');
const task = express();
task.use(cors());


const taskRepo = require('../persistence/task');
const index = require('./index');

task.get('/tasks', (req, res) => {
  res.send(taskRepo.getTasks());
});

task.listen(index.port, () => {
  console.log('Example app listening on port ' + index.port);
});
