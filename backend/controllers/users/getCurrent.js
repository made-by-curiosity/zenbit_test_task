const getCurrent = async (req, res, next) => {
  const { email, name } = req.user;

  res.json({
    user: {
      name,
      email,
    },
  });
};

module.exports = getCurrent;
