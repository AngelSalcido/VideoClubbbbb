const express = require('express');
const router = express.Router();
const controller = require('../controllers/genres')

/* PUT replace genre */
router.put('/:id', controller.replace);

/* POST create genre*/
router.post('/', controller.create);

/* GET genres listing. */
router.get('/', controller.list);

/* GET genre*/
router.get('/:id', controller.index);

/* PATCH update genre */
router.patch('/:id', controller.update);

/* DELETE delete genre */
router.delete('/:id', controller.destroy);

module.exports = router;
