const mongoose = require('./connections')
const ComplimentSchema = new mongoose.Schema({
  compliment: String,
  color: String
})

const Compliment = mongoose.model('Compliment', ComplimentSchema)

module.exports = Compliment
