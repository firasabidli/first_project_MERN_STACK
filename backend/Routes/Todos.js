const express = require('express');
const router = express.Router();

const todoController = require('../Controllers/Todo')

router.get('/', todoController.all);
router.get('/:id', todoController.get);
router.post('/', todoController.create);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.delete);

module.exports = router;
