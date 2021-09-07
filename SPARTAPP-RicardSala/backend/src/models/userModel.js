const { model, Schema } = require('mongoose');

const isValidPassword = require('../functions/isValidPassword');

const userSchema = Schema({
  name: String,
  email: String,
  password: String,
  picture: { type: String, default: 'http://placehold.it/32x32' },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

userSchema.methods.isValidPassword = isValidPassword;

module.exports = model('User', userSchema);
