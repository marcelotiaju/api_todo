const { Router } = require('express');
const TodoController = require('../controllers/TodoController');

const routes = Router();

routes.get('/todo', TodoController.index);

routes.get('/todo/:id', TodoController.show);

routes.post('/todo', TodoController.store);

routes.put('/todo/:id', TodoController.update);

routes.delete('/todo/:id', TodoController.destroy);

module.exports = routes;