'use strict';

const superTest = require('supertest');
const server = require('../server');
const request = superTest(server.app);

describe('Server Test', () => {
  it('handle working routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello!');
  });
  it('handle server errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  test('handle invalid routes', async () => {
    const response = await request.get('/whatever');
    expect(response.status).toEqual(404);
  });
  it('getting json data', async () => {
    const response = await request.get('/data');
    expect(response.body.name).toEqual('Luke Skywalker');
  });
});
