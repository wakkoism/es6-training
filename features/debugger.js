"use strict";

import express from 'express';
import bodyParser from '  body-parser';

const app = express();

app.use(bodyParser.json());

app.post('/', (request, response) => {
  debugger;
  response.json({
    status: 200,
    data: request.body,
  })
});

app.listen(3000);
