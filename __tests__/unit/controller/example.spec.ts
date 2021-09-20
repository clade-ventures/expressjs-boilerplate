import request from 'supertest';

import app from '@server/app';

import { mockCollection } from 'firestore-jest-mock/mocks/firestore';
import { Firestore } from '@google-cloud/firestore';

describe('GET /hello', () => {
  it('should return response bad request when name parameter doesnt exist', async () => {
    const result = await request(app).get('/v1/example/hello');

    expect(result.statusCode).toEqual(400);
  });

  it('should return 200 response', async () => {
    const result = await request(app).get('/v1/example/hello?name="Jon');

    expect(result.statusCode).toEqual(200);
  });
});

describe('Test', () => {
  it('testing stuff', () => {
    const firestore = new Firestore();
  
    return firestore
      .collection('users')
      .get()
      .then(userDocs => {
        const userDocsArr = [];
        userDocs.forEach((doc) => {
          userDocsArr.push({
            id: doc.id,
            ...(doc?.data?.() ?? {})
          })
        });
        expect(mockCollection).toHaveBeenCalledWith('users');
        expect(userDocsArr[0].name).toEqual('Homer Simpson');
      });
  });
})