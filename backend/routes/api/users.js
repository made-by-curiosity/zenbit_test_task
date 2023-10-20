const express = require('express');

const { ctrlWrapper, auth } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/register', ctrlWrapper(ctrl.register));

router.post('/login', ctrlWrapper(ctrl.login));

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.post('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;
