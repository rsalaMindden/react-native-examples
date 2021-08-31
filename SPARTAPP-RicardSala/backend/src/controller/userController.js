const User = require('../models/userModel');

async function deleteUSerById({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateUserById({ params: { userId }, body }, res) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      userId,
      body,
      { new: true },
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  deleteUSerById,
  updateUserById,
};
