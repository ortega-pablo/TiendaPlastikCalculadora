import request from 'supertest';
import { App } from '../../src/app';

describe('GET /api/example', () => {
  test('It should return a status code 200', async () => {
    const response = await request(new App().app).get('/api/example').send();
    expect(response.statusCode).toBe(200);
  });

  test('It should return an object with a message property whose value is "Mensaje de ejemplo!"', async () => {
    const response = await request(new App().app).get('/api/example').send();
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.message).toBe('Mensaje de ejemplo!');
  });
});
