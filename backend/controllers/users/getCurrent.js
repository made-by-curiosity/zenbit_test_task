const getCurrent = async (req, res, next) => {
  const { email } = req.user;

  res.json({
    user: {
      email,
    },
  });
};

module.exports = getCurrent;
