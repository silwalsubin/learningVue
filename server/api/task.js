import path from "path";

function isAuthorizedClientHost(hostName){
  return (process.env.CLIENT_HOST_NAME === hostName);
}

function sendUnauthorizedHtml(response){
  response.setHeader('Content-Type', 'text/html');
  response.sendFile(path.join
                    (__dirname + '/../views/unauthorized-message.html'));
}

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

tasks.post('/getAll', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.getAll(req.body.data));
});

tasks.post('/setAll', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(taskRepo.setTasks(req.body.data));
})
export default tasks;
