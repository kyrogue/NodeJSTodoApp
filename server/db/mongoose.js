var mongoose = require ('mongoose')

// Setup promise
mongoose.Promise = global.Promise;
// Setup connection
mongoose.connect('mongodb://localhost:27017/TodoApp')

module.exports = {mongoose};