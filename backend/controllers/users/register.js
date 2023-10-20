const { Conflict } = require('http-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { User } = require('../../models');

const { SECRET_KEY } = process.env;

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user) {
    throw new Conflict(`User with email ${email} already exist`);
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });

  const { id } = newUser;

  const payload = {
    id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  await newUser.update({ token });
  await newUser.save();

  res.status(201).json({
    token,
    user: {
      name,
      email,
    },
  });
};

module.exports = register;
