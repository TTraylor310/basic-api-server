'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const {sequelizeDatabase} = require('../src/models');
const request = supertest(app);

beforeAll( async () => {
  await sequelizeDatabase.sync();
});

afterAll( async () => {
  await sequelizeDatabase.sync();
});


describe('Testing REST API', () => {
  test('Create a person', async () => {
    let response = await request.post('/food').send({
      name: 'Tray',
      ethnicity: 'mexican',
      spiciness: 'hot',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tray');
    expect(response.body.ethnicity).toEqual('mexican');
    expect(response.body.spiciness).toEqual('hot');
  });

  test('Should read a person', () => {
    expect(true).toBe(false);
  });

  test('Should update a person', () => {
    expect(true).toBe(false);
  });

  test('Should delete a person', () => {
    expect(true).toBe(false);
  });
});


