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
async function getAll({ query }, res) {
  try {
    const trainings = await Training.find(query);
    res.json(trainings);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  createOne,
  getAll,
};
