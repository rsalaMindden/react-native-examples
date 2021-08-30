const Training = require('../models/trainingModel');

function handleError(error, status = 500) {
  this.status(status);
  this.send(error.message);
}

async function createOne({ body }, res) {
  try {
    const newTraining = await Training.create(body);
    // eslint-disable-next-line no-underscore-dangle
    const test = await Training.findById(newTraining._id)
      .populate({
        path: 'exercises.exercise',
        select: ['name', 'description', 'picture'],
      });

    res.send(test);
  } catch (error) {
    handleError.call(res, error);
  }
}
module.exports = {
  createOne,
};
