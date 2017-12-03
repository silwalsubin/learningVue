let tasks = require ('express').Router();
import taskRepo from '../persistence/task-repository';

tasks.post('/add', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.add(req.body.data));
});

tasks.post('/changeStatus', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.changeStatus(req.body.data));
});

tasks.post('/delete', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.delete(req.body.data));
});

tasks.post('/update', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.set(req.body.data));
});

tasks.get('/getAll', (req, res) => {
  res.send(taskRepo.getAll());
});

export default tasks;
