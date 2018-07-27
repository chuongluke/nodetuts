var express = require('express');

var router = express.Router();

var TodoControler = require('../../controllers/todos.controller');

router.get('/', TodoControler.getTodos);

router.post('/', TodoControler.createTodo);

router.put('/', TodoControler.updateTodo);

router.delete('/:id', TodoControler.removeTodo);

module.exports = router;