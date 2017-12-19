import express from 'express'
let user = express.Router();

user.get('/user', (req, res) => {
  res.json(req.user.displayName);
});

export default user;
