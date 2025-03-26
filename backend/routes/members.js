const express = require('express');
const router = express.Router();
const controller = require('../controllers/members')

/* PUT replace member */
router.put('/:id', controller.replace);

/* POST create member*/
router.post('/', controller.create);

/* GET members listing. */
router.get('/', controller.list);

/* GET member*/
router.get('/:id', controller.index);

/* PATCH update member */
router.patch('/:id', controller.update);

/* DELETE delete member */
router.delete('/:id', controller.destroy);

module.exports = router;
