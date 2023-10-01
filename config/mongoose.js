//setup mongodb using mongoose as ODM b/w server and database
const mongoose = require('mongoose');
const env = require('./env');
const connect = mongoose.connect(env.DEVELOPMENT.mongodbUrl);
connect.then(() => {
    console.log('Successfully connected to Database: mongoDB');
}).catch((error) => {
    console.log('Could not connect with Database', error);
});

module.exports = mongoose.connection;