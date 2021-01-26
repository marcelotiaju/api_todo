const models = require('../models');

class TodoController {
  async index(req, res) {
    try {
      const todo = await models.Todo.findAll();

      return res.json(todo);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const todo = await models.Todo.findByPk(req.params.id);

      return res.json(todo);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const todo = await models.Todo.create(req.body);

      return res.json(todo);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const todo = await models.Todo.findByPk(req.params.id);

      await todo.update(req.body);

      return res.json({ todo });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const todo = await models.Todo.findByPk(req.params.id);

      await todo.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new TodoController();