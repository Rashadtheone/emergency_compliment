const mongoose = require('mongoose')
mongoose.connect('mongodb://local/compliments')
mongoose.Promise = Promise
module.exports = mongoose
