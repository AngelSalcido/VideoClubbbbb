const express = require('express');
const router = express.Router();
const controller = require('../controllers/actors')

/* PUT replace actor */
router.put('/:id', controller.replace);

/* POST create actor*/
router.post('/', controller.create);

/* GET actors listing. */
router.get('/', controller.list);

/* GET actor*/
router.get('/:id', controller.index);

/* PATCH update actor */
router.patch('/:id', controller.update);

/* DELETE delete actor */
router.delete('/:id', controller.destroy);

module.exports = router;
