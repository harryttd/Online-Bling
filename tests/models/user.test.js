'use strict'

const db = require('APP/db')
const { User } = require('APP/db/models')
const { expect } = require('chai')

describe('!----- Backend Database Model - User -----!', () => {
  before('wait for the db', () => db.didSync
    .then(() => db.sync({ force: true }))
  )

  // after('clear db', () => 
  //   User.truncate({ cascade: true })
  // )

  let data = {
    users: [
      { name: 'so many', email: 'god1@examaple.com', password: '1234', session_id: 'FeDXeRDCCms6Ci2H4K5WWjEE0UBmaALC' },
      { name: 'so many2', email: 'god2@exasmple.com', password: '1234' },
      { session_id:'5jgwVhIBVI8fyqaSdflPhoqrDPbqjtH-' },
      { name: 'so many3', email: 'god3@exssample.com', password: '1234', session_id: 'QSHGYmXJM9Jvxh4VDQ0-2fCafXvN5CKT' },      
      { session_id: 'QSHGYmXJM9Jvxh4VDQ0-2fCafXvN5CKT' }],
    addresses:[{
      address1: '22-17 19th street',
      address2: null,
      city: 'New York',
      state: 'NY',
      country: 'United States',
      zipcode: '11105',
      user_id: 1
    },{
      address1: '123 Sesame street',
      address2: null,
      city: 'Astoria',
      state: 'NY',
      country: 'United States',
      zipcode: '11105',
      user_id: 1
    }]
  }

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true)
        .catch(err => console.error(err)));

    it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false)
        .catch(err => console.error(err)));
  });

  xdescribe('class method', ()=>{    

    before('feed user with session', ()=>{
      return User.bulkCreate(data.users)
    })

    it('remove users with session id', ()=>{
      let dummySessionID = '5jgwVhIBVI8fyqaSdflPhoqrDPbqjtH-';

      return User.removeUserWithSessionId(dummySessionID)
        .then(console.log)
        .then(()=>{
          return User.findAll({ where:{ session_id: dummySessionID }});
        })
        .then(console.log)
        .catch(console.error)
    })
  })
});
