const tasks = require ('express').Router();
const taskRepo = require('../persistence/task-repository');

tasks.post('/add', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.add(req.body));
});

tasks.post('/changeStatus', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.changeStatus(req.body));
});

tasks.post('/delete', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.delete(req.body));
});

tasks.get('/getAll', (req, res) => {
  res.send(taskRepo.getAll());
});

module.exports = tasks;
