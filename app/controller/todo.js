module.exports = app => {
  class ToDoController extends app.Controller {
    *list(ctx) {
      ctx.body = yield ctx.model.Todo.find({}).sort({ createTime: 'desc' }); // you should use upper case to access mongoose model
    }
    *create(ctx) {
      const createRule = {
        content: { type: 'string' }
      };
      ctx.validate(createRule);
      yield ctx.model.Todo.create(ctx.request.body);
      ctx.body = { successed: true };
      ctx.status = 201;
    }
  }
  return ToDoController;
};
