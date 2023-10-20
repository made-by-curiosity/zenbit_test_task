const { Deal } = require('../../models');

const getAll = async (req, res, next) => {
  const deals = await Deal.findAll();

  res.json({
    deals,
  });
};

module.exports = getAll;
