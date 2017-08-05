'use strict';
const mm = require('egg-mock');
const assert = require('assert');
const fetch = require('isomorphic-fetch');

describe('test/app/controller/home.test.js', () => {
  let app;
  before(() => {
    app = mm.app();
    return app.ready();
  });

  afterEach(mm.restore);
  after(() => app.close());

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect({ aa: 1 })
      .expect(200);
  });

  it('one plus one', () => {
    assert.equal(1 + 1, 2);
  });

  it('settimeout', done => {
    const time = new Date();
    setTimeout(() => {
      const time2 = new Date();
      assert(time2 - time > 9);
      assert(time2 - time < 20);
      done();
    }, 10);
  });

  it('fetch', done => {
    fetch('http://www.baidu.com').then(res => {
      assert(res.ok);
      assert.equal(res.status, 200);
      res.text().then(text => {
        assert(text.indexOf('百度一下') > 0);
        done();
      });
    });
  });

  it('fetch await', async () => {
    const res = await fetch('http://www.baidu.com');
    assert(res.ok);
  });

  it('get todo list', async () => {
    const res = await fetch('http://localhost:7001/todos');
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.length, 5);
    assert(res.ok);
  });
});
