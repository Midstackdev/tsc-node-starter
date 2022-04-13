import supertest from 'supertest';
import app from '../index';

// create a reques object
const request = supertest(app);

describe('Test basic endpoint server', () => {
  it('Gets the / endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
