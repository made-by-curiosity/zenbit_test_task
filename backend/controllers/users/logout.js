const { Unauthorized } = require('http-errors');
const { User } = require('../../models/User');

const logout = async (req, res, next) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, { token: null });

  if (!user) {
    throw new Unauthorized(`Email or password is wrong`);
  }

  res.status(204).json();
};

module.exports = logout;
