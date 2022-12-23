import request from 'supertest';
import { Server } from '../src/server';

describe('app', () => {
  it('responds with a not found message', (done) => {
    void request(new Server())
      .get('/Fake-Endpoint')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', () => {
    void request(new Server())
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
      });
  });
});
