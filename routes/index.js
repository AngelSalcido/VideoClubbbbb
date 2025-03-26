const express = require('express');
var router = express.Router();
const controller = require('../controllers/index')

/* GET home page. */
router.get('/', controller.home);

/* POST login method */
router.post('/login', controller.login);

module.exports = router;
