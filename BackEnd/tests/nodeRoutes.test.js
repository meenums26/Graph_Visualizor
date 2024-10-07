const request = require('supertest');
const express = require('express');
const connectDB = require('../src/config/dbConfig');
const nodeRoutes = require('../src/routes/nodeRoutes');

const app = express();

app.use(express.json());
app.use('/', nodeRoutes);


beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /data', () => {
  it('should return a list of nodes', async () => {
    const response = await request(app).get('/data');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true); 
  });

  it('should return status 500 if there is an error', async () => {
   
    jest.spyOn(Node, 'find').mockImplementation(() => {
      throw new Error('Database error');
    });

    const response = await request(app).get('/data');

    expect(response.status).toBe(500);
    expect(response.text).toBe('Error retrieving data'); 

    jest.restoreAllMocks();
  });
});
