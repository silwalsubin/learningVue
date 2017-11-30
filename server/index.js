import express from 'express';
import config from './config';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskApi from './api/task';

let port = config.port
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/task', taskApi);

app.listen(port, () => {
  console.log(`Tasks To-Do app listening on port ${port}`);
});
