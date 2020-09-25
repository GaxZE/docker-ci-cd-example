const { app } = require('../app');
const request = require('supertest');

beforeAll(() => {
  process.env.NODE_ENV = 'test';
})

test('get world', async () => {
  const res = await request(app).get('/');
  const response = [
    { name: 'Gary', id: 1 }
  ]
  expect(res.status).toBe(200);
  expect(res.body).toEqual(response);
});
