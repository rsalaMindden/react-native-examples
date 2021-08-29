const { model, Schema } = require('mongoose');

const exerciseSchema = Schema({
  name: String,
  description: String,
  picture: { type: String, default: 'http://placehold.it/32x32' },
  done: Boolean,
});

module.exports = model('Exercise', exerciseSchema);
