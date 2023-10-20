const { Conflict } = require('http-errors');
const { User } = require('../../models');

const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`User with email ${email} already exist`);
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const { email: userEmail } = await User.create({
    name,
    email,
    password: hashPassword,
  });

  res.status(201).json({
    user: {
      email: userEmail,
    },
  });
};

module.exports = register;
