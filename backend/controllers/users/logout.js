const { Unauthorized } = require('http-errors');
const { User } = require('../../models');

const logout = async (req, res, next) => {
  const { id } = req.user;
  const user = await User.findByPk(id);

  if (!user) {
    throw new Unauthorized(`Email or password is wrong`);
  }

  await user.update({ token: null });
  await user.save();

  res.status(204).json();
};

module.exports = logout;
