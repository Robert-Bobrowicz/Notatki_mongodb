const mongoose = require('mongoose');
const {database} = require('../config');

//połączenie do mongodb
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log(' ...db connected');
});

