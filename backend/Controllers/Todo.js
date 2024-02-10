const Todo = require('./../Models/Todo');

// get all Todos
exports.all = (req, res) => {
  Todo.find()
    .then(Todos => res.status(200).json(Todos))
    .catch(err => res.status(400).json({error: err.message}));
};

// get a Todo by id
exports.get = (req, res, next) => {
  Todo.findOne({ _id: req.params.id })
      .then(Todo => res.status(200).json(Todo))
      .catch(error => res.status(404).json({ error }));
  };

  // store a new Todo
exports.create = (req, res, next) => {
  const newTodo = new Todo({
    ...req.body
  });
  newTodo.save()
    .then(() => res.status(201).json({success : true, message: 'Todo created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update a Todo by id
exports.update = (req, res, next) => {
  Todo.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({success : true, message: 'Todo updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete a Todo by id
exports.delete = (req, res, next) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({success : true, message: 'Todo deleted !'}))
    .catch(error => res.status(400).json({ error }));
};
