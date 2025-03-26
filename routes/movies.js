const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies')

/* PUT replace movie */
router.put('/:id', controller.replace);

/* POST create movie*/
router.post('/', controller.create);

/* GET movies listing. */
router.get('/', controller.list);

/* GET movie*/
router.get('/:id', controller.index);

/* PATCH update movie */
router.patch('/:id', controller.update);

/* DELETE delete movie */
router.delete('/:id', controller.destroy);

/* PATCH add actor into movie */
router.patch('/actors/:id', controller.addActor);

module.exports = router;
