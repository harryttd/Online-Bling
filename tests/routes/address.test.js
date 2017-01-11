const request = require('supertest-as-promised');
const { expect } = require('chai');
const db = require('APP/db');
const { Address, User } = require('APP/db/models');
const app = require('APP/server/start');

describe('Route Testing: test for /api/address/', () => {

  before('wait for the db', () => db.didSync);

  after(() =>
      User.truncate({ cascade: true })
     .then( () => Address.truncate({ cascade: true }))
  );


    let userData = {
      name: 'Testy McTesterfield',
      email: 'test@example.gov',
      password: '1234'
    }

    let addressData = {
                        address1: '170 TEST AVE',
                        address2: 'Apt bogus',
                        city: 'TEST',
                        state: 'NY',
                        country: 'USA',
                        zipcode: '12345',
                        user_id: 1
                      };

    before('Build USER and ADDRESS instance', () =>
      User.create(userData)
      .then( () => Address.create(addressData) )

      // .then(res => console.log(res))
      // .catch(err => console.log('ERR', err))
    );

    it('GET /ADDRESS gets all ADDRESS', () =>
      request(app)
        .get(`/api/address`)
        .expect(200)
        .then(res => {
          // console.log('res response');
          // console.log(res.body);
          expect(res.body).to.be.an('array');
        })
    );

    it('GET /ADDRESS/:id gets target ADDRESS by id', () =>
      request(app)
        .get(`/api/address/1`)
        .expect(200)
        .then(res => {
          // console.log(res.data);
          expect(res.body).to.be.an('object');
          expect(res.body.address1).to.be.equal(addressData.address1);
        })
    );

    it('PUT /:id update an ADDRESS with corresponding id', () =>
      request(app)
        .put(`/api/address/1`)
        .send({
                address1: '170 PUT TEST',
                address2: 'Apt PUT TEST',
                city: 'PUTTEST',
                state: 'NY',
                country: 'USA',
                zipcode: '12345',
                user_id: 1
              })
        .then(res => {
          expect(res.body.address1).to.equal('170 PUT TEST')
        })
      )

      it('DELETE /:id removes an ADDRESS with corresponding id', () =>
        request(app)
          .delete(`/api/address/1`)
          .expect(204)
      )

    });
