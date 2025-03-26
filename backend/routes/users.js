const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

/* PUT replace user */
router.put('/:id', controller.replace);

/* POST create user*/
router.post('/', controller.create);

/* GET users listing. */
router.get('/', controller.list);

/* GET user*/
router.get('/:id', controller.index);

/* PATCH update user */
router.patch('/:id', controller.update);

/* DELETE delete user */
router.delete('/:id', controller.destroy);

module.exports = router;
