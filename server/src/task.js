const express = require('express');
const cors = require('cors');
const task = express();
const bodyParser = require('body-parser');
task.use(cors());
task.use(bodyParser.json());


const taskRepo = require('../persistence/task');
const index = require('./index');

task.get('/tasks', (req, res) => {
  res.send(taskRepo.getTasks());
});

task.post('/task', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.addTask(req.body));
});

task.listen(index.port, () => {
  //taskRepo.addTask({name :"Subin", isComplete : true});
  console.log('Example app listening on port ' + index.port);
});
