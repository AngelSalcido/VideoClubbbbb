const express = require('express');
const router = express.Router();
const controller = require('../controllers/copies')

/* PUT replace copy */
router.put('/:id', controller.replace);

/* POST create copy*/
router.post('/', controller.create);

/* GET copies listing. */
router.get('/', controller.list);

/* GET copy*/
router.get('/:id', controller.index);

/* PATCH update copy */
router.patch('/:id', controller.update);

/* DELETE delete copy */
router.delete('/:id', controller.destroy);

module.exports = router;
