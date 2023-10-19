const express = require('express');

const {
  // validation,
  ctrlWrapper,
  auth,
} = require('../../middlewares');
// const { authSchema } = require('../../models/user');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/register', ctrlWrapper(ctrl.register));

router.post('/login', ctrlWrapper(ctrl.login));

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.post('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;
