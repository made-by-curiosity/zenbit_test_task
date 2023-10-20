const { Unauthorized } = require('http-errors');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Unauthorized(`Email or password is wrong`);
  }

  const passCompare = bcrypt.compareSync(password, user.password);

  if (!passCompare) {
    throw new Unauthorized('Email or password is wrong');
  }

  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  await user.update({ token });
  await user.save();

  res.json({
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};

module.exports = login;
