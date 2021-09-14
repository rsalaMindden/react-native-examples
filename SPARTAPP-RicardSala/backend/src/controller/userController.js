const User = require('../models/userModel');

async function deleteUserById({ params: { userId } }, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.send(deletedUser);
  } catch (error) {
    res.send(error);
    res.status(500);
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
  deleteUserById,
  updateUserById,
};
