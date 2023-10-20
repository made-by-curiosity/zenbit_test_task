const express = require('express');

const { ctrlWrapper } = require('../../middlewares');
const { deals: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/all', ctrlWrapper(ctrl.getAll));

module.exports = router;
