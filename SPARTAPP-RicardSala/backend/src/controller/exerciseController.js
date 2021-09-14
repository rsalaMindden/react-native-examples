const Exercise = require('../models/exerciseModel');

async function createOne({ body }, res) {
  try {
    const newExercise = await Exercise.create(body);
    res.json(newExercise);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  createOne,
};
