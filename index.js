console.log("Project running... ");

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const {port} = require("./config");
const {router} = require('./routes/api');

//db
require('./db/mongoose');

//parser
app.use(bodyParser.json());

//API
app.use('/', router);

//server
app.listen(port, () => {
    console.log(' ...server is listening on port ' + port);
})