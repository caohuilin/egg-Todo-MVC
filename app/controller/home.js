'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = { aa: 1 };
    }
  }
  return HomeController;
};
