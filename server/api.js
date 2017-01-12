'use strict'

const db = require('APP/db');
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./routes/auth'))
  .use('/users', require('./routes/users'))
  .use('/address', require('./routes/address'))
  .use('/cart', require('./routes/cart-line-item'))
  .use('/category', require('./routes/categories'))
  .use('/order', require('./routes/order'))
  .use('/product', require('./routes/product'))
  .use('/productReview', require('./routes/product-review'))
// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
