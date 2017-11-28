const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const taskApi = require('./api/task');


const port = config.port
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/task', taskApi);

app.listen(port, () => {
  console.log('Tasks To-Do app listening on port: ' + port);
});
