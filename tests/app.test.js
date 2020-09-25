const { app } = require('../src/app');
const request = require('supertest');

beforeAll(() => {
  process.env.NODE_ENV = 'test';
})

test('get world', async () => {
  const res = await request(app).get('/');
  const response = [
    { id: 1, name: 'Gary', active: true }
  ]
  expect(res.status).toBe(200);
  expect(res.body).toEqual(response);
});
