const express = require('express');
const cors = require('cors');
const task = express();
const bodyParser = require('body-parser');
task.use(cors());
task.use(bodyParser.json());


const taskRepo = require('../persistence/task');
const index = require('./index');

task.get('/getTasks', (req, res) => {
  res.send(taskRepo.getAll());
});

task.post('/addTask', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.add(req.body));
});

task.post('/deleteTask', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.delete(req.body));
});

task.listen(index.port, () => {
  console.log('Example app listening on port ' + index.port);
});
