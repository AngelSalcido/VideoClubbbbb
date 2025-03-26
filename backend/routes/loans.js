const express = require('express');
const router = express.Router();
const controller = require('../controllers/loans')


/* POST create loan*/
router.post('/', controller.create);

/* GET loans listing. */
router.get('/', controller.list);

/* GET loan*/
router.get('/:id', controller.index);

/* PATCH update loan */
router.patch('/:id', controller.update);


module.exports = router;
