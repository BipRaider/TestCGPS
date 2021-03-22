'use strict';

const request = require('supertest');

const TTSBack = require('../../api/server');

describe('\n\n Acceptance tests router', () => {
   let server;

   before(async () => {
      server = new TTSBack().start();
   });

   after(async () => {
      server.close(() => {
         process.exit(0);
      });
      console.log('\x1b[35m%s\x1b[0m', 'Server stopped');
   });

   describe('\n Acceptance tests auth.router', () => {
      describe('POST /add', () => {
         it('should return 400 Error: Invalid request body ', async () => {
            await request(server)
               .post('/add')
               .set('Content-Type', 'application/json')
               .send({
                  typeBike: 'city',
                  name: 'bike name ',
               })
               .expect(400);
         });

         it('should return the status 201', async () => {
            await request(server)
               .post('/add')
               .set('Content-Type', 'application/json')
               .send({
                  typeBike: 'city',
                  name: 'bike name',
                  rent: 19.1,
               })
               .expect(201);
         });
      });
   });
});
