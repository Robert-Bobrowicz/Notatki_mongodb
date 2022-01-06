console.log("Project running... ");

const express = require('express');
const app = express();

const {port} = require("./config");
const {router} = require('./routes/api');

require('./db/mongoose');

app.use('/', router);

app.listen(port, () => {
    console.log(' ...server is listening on port ' + port);
})