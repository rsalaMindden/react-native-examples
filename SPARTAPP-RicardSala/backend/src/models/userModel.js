const { model, Schema } = require('mongoose');

const isValidPassword = require('../functions/isValidPassword');

const userSchema = Schema({
  name: String,
  email: String,
  pasword: String,
  picture: { type: String, default: 'http://placehold.it/32x32' },
});

userSchema.methods.isValidPassword = isValidPassword;

module.exports = model('User', userSchema);
