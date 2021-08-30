const { model, Schema } = require('mongoose');

const exerciseSchema = Schema({
  name: String,
  description: String,
  picture: String,
  done: { type: Boolean, default: false },
  equipment: { type: Boolean, default: false },
  fail: { type: Boolean, default: false },
});

module.exports = model('Exercise', exerciseSchema);
