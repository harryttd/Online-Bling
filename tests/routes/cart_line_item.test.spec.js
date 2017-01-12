const request = require('supertest-as-promised');
const { expect } = require('chai');
const db = require('APP/db');
const { User, Product, Cart_Line_Item } = require('APP/db/models');
const app = require('APP/server/start');

describe('!----- Backend API Route - /api/cart -----!', () => {


  let data = {
    user: { name: 'Cookie Monster', email: 'cookie@monster.com', password: '1234' },
    products: [
      { name: 'Diamond Ring', sku: 'GR1', description: { metal: '14K Yellow Gold', design: 'Butterfly', stone: 'diamond', age: 'Teens' }, price: 99.99, quantity: 10 },
      { name: 'Gold Dude Necklace', sku: 'GDN1', description: { metal: '24K Yellow Gold', design: 'chain', stone: 'none', age: 'Adults' }, price: 1000, quantity: 20 },
      { name: 'Drake Bling Stud Diamond Earrings', sku: 'DSD1', description: { metal: '14K White Gold', design: 'Diamond Stud', stone: 'diamond', backing: 'Covered Screw Backs', age: 'Adults' }, price: 3000, quantity: 50 },
      { name: 'Baby Emerald Earrings', sku: 'BE1', description: { metal: '14K White Gold', design: 'Diamond Stud', stone: 'diamond', backing: 'Covered Screw Backs', age: 'Baby' }, price: 200, quantity: 50 },
      { name: 'Drake Exclusive Bracelet', sku: 'DEB1', description: { metal: '14K Gold', design: 'Plain', stone: 'none', age: 'Teens' }, price: 99.99, quantity: 10 }
    ],
    cartLineItems: [
      { quantity: 1, user_id: 1, product_id: 1 },
      { quantity: 10, user_id: 1, product_id: 2 },
      { quantity: 3, user_id: 1, product_id: 3 },
      { quantity: 4, user_id: 1, product_id: 4 },
    ]
  }

  before('wait for the db', () => db.didSync
    .then(() => db.sync({ force: true }))
  )

  before('feed data', () => {
    User.create(data.user)
      .then(res => Product.bulkCreate(data.products))
      .then(res => Cart_Line_Item.bulkCreate(data.cartLineItems))
  })

  after(function() {
    return Cart_Line_Item.truncate({ cascade: true })
      .then(() => Product.truncate({ cascade: true }))
      .then(() => User.truncate({ cascade: true }));
  });

  it('GET /api/cart gets all cart line items', () =>
    request(app)
    .get(`/api/cart`)
    .expect(200)
    .then(res => {
      expect(res.body).to.be.an('array');
    })
  );

  it('GET /api/cart/:id gets single cart line item', () =>
    request(app)
    .get(`/api/cart/2`)
    .expect(200)
    .then(res => {
      expect(res.body.quantity).to.be.equal(20);
    })
  );

  it('POST /api/cart create single cart line item', () =>
    request(app)
    .post(`/api/cart/`)
    .send({ quantity: 1, user_id: 1, product_id: 4 })
    .expect(201)
    .then(res => {
      expect(res.body.id).to.be.equal(5);
      expect(res.body.quantity).to.be.equal(1);
    })
  );

  it('PUT /api/cart update single cart line item', () =>
    request(app)
    .put(`/api/cart/5`)
    .send({ quantity: 100, user_id: 1, product_id: 4 })
    .expect(202)
    .then(res => {
      expect(res.body.quantity).to.be.equal(100);
    })
  );

  it('REMOVE /api/cart/5 remove single cart line item', () =>
    request(app)
    .delete(`/api/cart/5`)
    .expect(204)
    .then(res => {
      request(app)
        .get(`/api/cart`)
        .expect(200)
        .then(res => {
          expect(res.body.length).to.be.equal(4);
        })
    })
  );
})
