import 'mocha';
import { expect } from 'chai';
import request from 'supertest';

import app from '@server/app';

describe('GET /hello', () => {
  it('should return response bad request when name parameter doesnt exist', async () => {
    const result = await request(app).get('/v1/example/hello');

    expect(result.statusCode).to.be.equal(400);
  });

  it('should return 200 response', async () => {
    const result = await request(app).get('/v1/example/hello?name="Jon');

    expect(result.statusCode).to.be.equal(200);
  });
});
