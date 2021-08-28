const { model, Schema } = require('mongoose');

const trainingSchema = Schema({
  time: String,
  exercises: [{
    exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
    reps: Number,
  }],

});
module.exports = model('Training', trainingSchema);
