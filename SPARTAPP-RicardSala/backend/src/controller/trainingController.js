const Training = require('../models/trainingModel');

async function createOne({ body }, res) {
  try {
    let newTraining = await Training.create(body);
    newTraining = await newTraining.populate({
      path: 'exercises.exercise',
      select: ['name', 'description', 'picture'],
    });

    res.json(newTraining);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}
module.exports = {
  createOne,
};
