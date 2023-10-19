// const { Conflict } = require('http-errors');
// const { User } = require('../../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {
  const { email, password } = req.body;
  // const user = await User.findOne({ email });

  // if (user) {
  //   throw new Conflict(`User with email ${email} already exist`);
  // }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const { email: userEmail } = {
    email,
    password: hashPassword,
  };

  // const { email: userEmail } = await User.create({
  //   email,
  //   password: hashPassword,
  // });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email: userEmail,
      },
    },
  });
};

module.exports = register;
