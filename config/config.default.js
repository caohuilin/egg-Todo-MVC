'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499305912141_8584';

  // add your config here
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
  };
  config.logger = {
    level: 'DEBUG'
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1/todomvc',
    options: {}
  };
  config.security = {
    csrf: {
      enable: false
    },
    xframe: {
      enable: false
    }
  };

  return config;
};
