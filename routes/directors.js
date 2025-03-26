const express = require('express');
const router = express.Router();
const controller = require('../controllers/directors')

/* PUT replace director */
router.put('/:id', controller.replace);

/* POST create director*/
router.post('/', controller.create);

/* GET directors listing. */
router.get('/', controller.list);

/* GET director*/
router.get('/:id', controller.index);

/* PATCH update director */
router.patch('/:id', controller.update);

/* DELETE delete director */
router.delete('/:id', controller.destroy);

module.exports = router;
