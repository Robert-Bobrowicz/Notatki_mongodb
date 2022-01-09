console.log("Project running... ");

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const {port} = require("./config");
const {router} = require('./routes/api');
const cors = require('cors');

//db
require('./db/mongoose');

//cors
app.use(cors());

//parser
app.use(bodyParser.json());

//API
app.use('/', router);

//server
app.listen(port, () => {
    console.log(' ...server is listening on port ' + port);
})