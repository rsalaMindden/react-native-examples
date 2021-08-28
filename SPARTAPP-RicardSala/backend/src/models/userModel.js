const { model, Schema } = require('mongoose');

const userSchema = Schema({
  name: String,
  email: String,
  pasword: String,
  picture: { type: String, default: 'http://placehold.it/32x32' },
});
module.exports = model('User', userSchema);
