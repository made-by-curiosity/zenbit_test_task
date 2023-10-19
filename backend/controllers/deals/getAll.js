const deals = [
  {
    id: 1,
    building: 'The Marina Torch',
    sold: '75%',
    ticket: 60000,
    dhs: 6500000,
    profitability: '9.25%',
    daysLeft: 150,
    img: 'https://res.cloudinary.com/dpbmdhjuq/image/upload/v1697713139/zenbit%20test%20task/c0zsjixbxw6vmpwfucpe.png',
  },
  {
    id: 2,
    building: 'HHHR Tower',
    sold: '75%',
    ticket: 60000,
    dhs: 6500000,
    profitability: '9.25%',
    daysLeft: 150,
    img: 'https://res.cloudinary.com/dpbmdhjuq/image/upload/v1697713139/zenbit%20test%20task/ztfcmcpgohbfcimhpjuu.png',
  },
  {
    id: 3,
    building: 'Ocean peaks',
    sold: '75%',
    ticket: 60000,
    dhs: 6500000,
    profitability: '9.25%',
    daysLeft: 150,
    img: 'https://res.cloudinary.com/dpbmdhjuq/image/upload/v1697713139/zenbit%20test%20task/d9htyccqzgzef8otjkqg.png',
  },
  {
    id: 4,
    building: 'Al Yaqoub Tower',
    sold: '75%',
    ticket: 60000,
    dhs: 6500000,
    profitability: '9.25%',
    daysLeft: 150,
    img: 'https://res.cloudinary.com/dpbmdhjuq/image/upload/v1697713139/zenbit%20test%20task/b03ezndvufdc4kfsrjva.png',
  },
];

const getAll = async (req, res, next) => {
  res.json({
    status: 'success',
    code: 200,
    data: {
      deals: {
        deals,
      },
    },
  });
};

module.exports = getAll;
