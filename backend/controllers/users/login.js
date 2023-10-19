// const { Unauthorized } = require('http-errors');
// const { User } = require('../../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  // const user = await User.findOne({ email });

  // if (!user) {
  //   throw new Unauthorized(`Email or password is wrong`);
  // }

  // const passCompare = bcrypt.compareSync(password, user.password);

  // if (!passCompare) {
  //   throw new Unauthorized('Email or password is wrong');
  // }

  // const payload = {
  //   id: user._id,
  // };

  // const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  // await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: 'success',
    code: 200,
    data: {
      // token,
      user: {
        // email: user.email,
        email,
        password,
      },
    },
  });
};

module.exports = login;
