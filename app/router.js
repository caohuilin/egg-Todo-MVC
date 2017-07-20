'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/news', app.controller.news.list);
  app.get('/todos', app.controller.todo.list);
  app.post('/todos', app.controller.todo.create);
  app.put('/todos', app.controller.todo.delete);
};
