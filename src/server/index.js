const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const task = express();
task.use(cors());
task.use(bodyParser.json());


const taskRepo = require('./persistence/task-repository');
const config = require('./config');

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

task.post('/changeStatus', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.changeStatus(req.body));
});

task.listen(config.port, () => {
  console.log('Example app listening on port ' + config.port);
});
